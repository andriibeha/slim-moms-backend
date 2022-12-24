const { Schema, model } = require('mongoose');
const Joi = require('joi');

const usersDateSchemaModel = Schema(
  {
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const UsersDate = model('usersdate', usersDateSchemaModel);

const getUsersDateSchema = Joi.object({
  height: Joi.number().integer().required(),
  age: Joi.number().integer().required(),
  curWeight: Joi.number().integer().required(),
  desWeight: Joi.number().integer().required(),
  bloodType: Joi.number().integer().required(),
});

module.exports = { UsersDate, getUsersDateSchema };
