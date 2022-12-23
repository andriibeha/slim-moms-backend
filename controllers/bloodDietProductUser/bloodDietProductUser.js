const { BloodDietProduct } = require('../../models');


const bloodDietProductsUser = async (req, res, next) => {
  
  const bloodType = req.user.bloodType;
  const dailyCalorieUser = req.user.dailyCalorie;
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

module.exports = bloodDietProductsUser;
