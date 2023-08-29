const jwt = require("jsonwebtoken")
const Cookies = require("js-cookie")

require("dotenv").config()
const SECRET = process.env.SECRET

const authJwt = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, SECRET, (err, data) => {
      if (err) {
        console.log(err)
      }
      req.data = data
      next()
    })
  } else if (authHeader) {
    jwt.verify(authHeader, SECRET, (err, data) => {
      if (err) {
        console.log(err)
      }
      req.data = data
      next()
    })
  } else {
    res.status(400).send({ msg: "Error while checking jwt" })
  }
}

module.exports = authJwt
