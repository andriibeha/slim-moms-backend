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
  const { title } = req.query;
  const result = await BloodDietProduct.find({});
  const queryProduct = await result.filter(result => result.title.ua === title);
  res.json({
    status: 'success',
    code: 200,
    queryProduct,
  });
};

module.exports = { bloodDietProductsUser, queryProducts };
