const { BloodDietProduct, UsersDate } = require('../../models');
const { RequestError } = require('../../helpers');

const bloodDietProductsUser = async (req, res, next) => {
  // const bloodType = req.user.bloodType;
  const { height, age, curWeight, desWeight, bloodType } = req.body;
  const dailyCalorie = Math.round(
    10 * curWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (curWeight - desWeight)
  );

  const result = await BloodDietProduct.find();

  const notRecProducts = result.filter(
    item => item.groupBloodNotAllowed[bloodType] === true
  );
  if (!notRecProducts.length) {
    throw RequestError(404, 'Not found');
  }

  const data = await UsersDate.create({
    ...req.body,
    notRecProducts,
    dailyCalorie,
  });

  res.json({
    status: 'success',
    code: 200,
    result: {
      notRecProducts,
      dailyCalorie,
    },
    data,
  });
};

module.exports = bloodDietProductsUser;
