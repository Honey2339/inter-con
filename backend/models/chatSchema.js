const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  message: { type: String, required: true },
})
const interconDB = mongoose.connection.useDb("intercon-db")
const chatModel = interconDB.model("intercon-chats", chatSchema)

module.exports = chatModel
