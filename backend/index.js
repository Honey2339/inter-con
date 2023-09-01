const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoute")
const app = express()

require("dotenv").config()
let MONGO_URL = process.env.MONGO_URL
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))

app.use("/users", userRoutes)

mongoose.connect(MONGO_URL).then(
  app.listen(5000, () => {
    console.log("Mongo is connected and server is running on 5000")
  })
)
