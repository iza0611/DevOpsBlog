const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  }
);

module.exports = mongoose.model("Comment", CommentSchema);