const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },

  token: {
    type: String,
    default: null,
  },

  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  bloodType: {
    type: Number,
    required: [true],
  },
  dailyCalorie: {
    type: Number,
    required: [true],
  },
});

const User = mongoose.model('User', usersSchema);
module.exports = {
  User,
};
