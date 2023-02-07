const mongoose = require("mongoose");

const privateMessageSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  from_user: {
    type: String,
    trim: true,
    required: true,
  },
  to_user: {
    type: String,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date_sent: {
    type: Date,
    default: Date.now,
  },
});

const PrivateMessage = mongoose.model("PrivateMessage", privateMessageSchema);

module.exports = PrivateMessage;
