const { Schema, model } = require('mongoose');
const Joi = require('joi');

const bloodDietProductsSchemaModel = Schema(
  {
    categories: {
      type: Array,
    },
    weight: {
      type: Number,
    },
    title: {
      type: Object,
    },
    calories: {
      type: Number,
    },
    groupBloodNotAllowed: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

const BloodDietProduct = model('product', bloodDietProductsSchemaModel);

const getBloodDietSchema = Joi.object({
  height: Joi.number().integer().required(),
  age: Joi.number().integer().required(),
  curWeight: Joi.number().integer().required(),
  desWeight: Joi.number().integer().required(),
  bloodType: Joi.number().integer().required(),
});

module.exports = { BloodDietProduct, getBloodDietSchema };
