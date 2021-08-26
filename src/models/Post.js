const mongoose = require("../database");

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", PostSchema);
