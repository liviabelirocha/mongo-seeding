const mongoose = require("../database");

const UserSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("User", UserSchema);
