const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is a required field'],
    },
    password: {
      type: String,
      required: [true, 'Password is a required field'],
    },
    email: {
      type: String,
      required: [true, 'Email is a required field'],
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
    bloodType: {
      type: Number,
      default: null,
    },
    dailyCalorie: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    age: {
      type: Number,
      default: null,
    },
    curWeight: {
      type: Number,
      default: null,
    },
    desWeight: {
      type: Number,
      default: null,
    },
    notRecProducts: {
      type: Array,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const UserJoiSchema = Joi.object({
  bloodType: Joi.number().min(1).max(4).required(),
  height: Joi.number().min(100).max(250).required(),
  age: Joi.number().min(18).max(100).required(),
  curWeight: Joi.number().min(20).max(500).required(),
  desWeight: Joi.number().min(20).max(500).required(),
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model('user', userSchema);

module.exports = { User, UserJoiSchema };
