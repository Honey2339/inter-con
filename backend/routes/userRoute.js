const jwt = require("jsonwebtoken")
const express = require("express")
const Cookies = require("js-cookie")
const userModel = require("../models/userSchema")
const chatModel = require("../models/chatSchema")
const authJwt = require("../auth/auth")
const z = require("zod")

require("dotenv").config()

const router = express.Router()

const SECRET = process.env.SECRET

const createJwt = (username) => {
  return jwt.sign({ username }, SECRET, { expiresIn: "1hr" })
}

const userInput = z.object({
  username: z.string().max(15),
  password: z.string().max(20),
  friends: z.any(),
  pending: z.any(),
})

router.post("/signup", async (req, res) => {
  const parsedInput = userInput.safeParse(req.body)
  if (!parsedInput.success) {
    res.json({
      error: parsedInput.error,
    })
    return
  }
  const username = parsedInput.data.username
  const password = parsedInput.data.password
  const friends = parsedInput.data.friends || []
  const pending = parsedInput.data.pending || []
  const lastUser = await userModel.findOne().sort({ id: -1 })
  const id = lastUser ? lastUser.id + 1 : 1
  const User = await userModel.findOne({ username })
  if (!User) {
    const newUser = new userModel({
      id,
      username,
      password,
      friends,
      pending,
    })
    newUser.save()
    res.send({ msg: "New User Created" })
  } else {
    res.send({ msg: "User Already Exists" })
  }
})

router.post("/login", async (req, res) => {
  const parsedInput = userInput.safeParse(req.body)
  if (!parsedInput.success) {
    res.json({
      error: parsedInput.error,
    })
    return
  }
  const username = parsedInput.data.username
  const password = parsedInput.data.password
  const User = await userModel.findOne({ username, password })
  if (User) {
    const token = createJwt(username)
    res.send({ msg: "Successfully Logged In", token })
  } else {
    res.status(400).send({ msg: "Username or Password is wrong" })
  }
})

router.get("/alluser", authJwt, async (req, res) => {
  const allUser = await userModel.find()
  res.status(200).send({ allUser })
})

router.post("/createpost", async (req, res) => {
  const username = req.cookies.username
  const { message } = req.body
  if (message !== "") {
    const user = await userModel.findOne({ username })
    const newMessage = new chatModel({ id: user.id, username, message })
    newMessage.save()
    res.send({ msg: "new message has been sent", id: user.id, username })
  }
})

router.get("/getpost", async (req, res) => {
  const allpost = await chatModel.find()
  res.send({ allpost })
})

router.get("/friends", async (req, res) => {
  const username = req.cookies.username
  if (username == undefined) {
    res.send({ msg: "could not find username" })
  } else {
    const userDetails = await userModel.findOne({ username })
    res.status(200).send({ friends: userDetails.friends })
  }
})

router.post("/sendrequest", async (req, res) => {
  const username = req.cookies.username
  const { loggedUser, ToUser } = req.body
  if (loggedUser == username) {
    const loggedUserDetails = await userModel.findOne({ username })
    const ToUserDetails = await userModel.findOne({ username: ToUser })
    if (
      loggedUserDetails.pending.includes(ToUser) ||
      ToUserDetails.pending.includes(loggedUser)
    ) {
      res.send({ msg: `Friend Request already sent to ${ToUser}`, ToUser })
      return
    }

    const filterUser = { username: ToUser }
    const updateUser = { $push: { pending: loggedUser } }
    const result = await userModel.findOneAndUpdate(filterUser, updateUser)
    res.send({ msg: `Sent Friend Request to ${ToUser}`, ToUser })
  }
})

router.get("/allrequest", async (req, res) => {
  const username = req.cookies.username
  if (username == undefined) {
    res.send({ msg: "could not find username" })
  } else {
    const userDetails = await userModel.findOne({ username })
    const friends = userDetails.pending
    res.status(200).send(friends)
  }
})

router.post("/accrequest", async (req, res) => {
  const username = req.cookies.username
  const { userLogged, toUser } = req.body
  if (username == undefined) {
    res.send({ msg: "could not find username" })
  } else {
    const userDetails = await userModel.findOne({ username })
    if (userDetails.friends.includes(toUser)) {
      res.send({ msg: "You are already friends with them" })
    }
    if (userDetails.pending.includes(toUser)) {
      const deletePending = await userModel.findOneAndUpdate(
        { username: username },
        { $pull: { pending: toUser } }
      )
      const addFriend = await userModel.findOneAndUpdate(
        { username: username },
        { $push: { friends: toUser } }
      )
      const addToOriginal = await userModel.findOneAndUpdate(
        { username: toUser },
        { $push: { friends: username } }
      )
      res.send({ msg: `Added friend ${toUser}` })
    }
  }
})

module.exports = router
