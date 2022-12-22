const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));

const dailyProductSchema = Schema({
  date: {
    type: Date,
    default: new Date(),
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const joiSchema = Joi.object({
  date: Joi.date().format('YYYY.MM.DDZ').required(),
  product: Joi.string().required(),
  weight: Joi.number().required(),
});

const DailyProduct = model('dailyProduct', dailyProductSchema);

module.exports = { DailyProduct, joiSchema };
