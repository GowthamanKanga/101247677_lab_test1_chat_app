const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Username is required"]
  },
  firstname: {
    type: String,
    required: [true, "First name is required"]
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
