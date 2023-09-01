const mongoose = require("mongoose")
const { number } = require("zod")

const userSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  friends: { type: mongoose.Schema.Types.Mixed },
  pending: { type: mongoose.Schema.Types.Mixed },
})

const interconDB = mongoose.connection.useDb("intercon-db")
const userModel = interconDB.model("intercon-users", userSchema)

module.exports = userModel
