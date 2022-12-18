const { BloodDietProduct } = require('../../models');
const { RequestError } = require('../../helpers');
const { User } = require('../../models/user');

const bloodDietProductsUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw RequestError(404, 'Not found');
  }
  const bloodType = user.bloodType;
  const dailyCalorieUser = user.dailyCalorie;
  const result = await BloodDietProduct.find({});

  const data = result.filter(
    result => result.groupBloodNotAllowed[bloodType] === true
  );
  res.json({
    status: 'success',
    code: 200,
    data,
    dailyCalorieUser,
  });
};

const queryProducts = async (req, res) => {
  const { categories } = req.query;
  const result = await BloodDietProduct.find({ categories });
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = { bloodDietProductsUser, queryProducts };
