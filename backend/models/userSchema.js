const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
})

const interconDB = mongoose.connection.useDb("intercon-db")
const userModel = interconDB.model("intercon-users", userSchema)

module.exports = userModel
