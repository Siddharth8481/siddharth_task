const mongoose = require("mongoose");
const chatroomSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  other_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  last_message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

const chat_rooms = mongoose.model("chat_rooms", chatroomSchema);
module.exports = chat_rooms;
