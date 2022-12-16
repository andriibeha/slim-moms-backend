const { Schema, model } = require('mongoose');

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

module.exports = { BloodDietProduct };
