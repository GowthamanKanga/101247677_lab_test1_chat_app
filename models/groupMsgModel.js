const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupMessageSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  from_user: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  room: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  message: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  date_sent: {
    type: String,
    required: true,
    unique: false,
    trim: true
  }
});

const GroupMessage = mongoose.model("GroupMessage", groupMessageSchema);

module.exports = GroupMessage;
