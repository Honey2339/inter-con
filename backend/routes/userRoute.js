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
  const lastUser = await userModel.findOne().sort({ id: -1 })
  const id = lastUser ? lastUser.id + 1 : 1
  const User = await userModel.findOne({ username })
  if (!User) {
    const newUser = new userModel({ id, username, password })
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
  const { username } = req.cookies
  console.log(req.cookies)
  const { message } = req.body
  if (message !== "") {
    const user = await userModel.findOne({ username })
    const newMessage = new chatModel({ id: user.id, username, message })
    newMessage.save()
    res.send({ msg: "new message has been sent", id: user.id })
  }
})

module.exports = router
