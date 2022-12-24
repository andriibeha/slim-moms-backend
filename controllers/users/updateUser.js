const { User } = require('../../models');
const { BloodDietProduct } = require('../../models');

// Error?????????
// Forbid to return password!!!!!!!!!!!!!!!!!!!!!!!!!

const updateUser = async (req, res) => {
  const { bloodType, height, age, curWeight, desWeight } = req.body;
  const { _id } = req.user;

  const dailyCalorie = Math.round(
    10 * curWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (curWeight - desWeight)
  );

  const products = await BloodDietProduct.find({});

  const fullNotRec = products.filter(
    product => product.groupBloodNotAllowed[bloodType] === true
  );

  const notRecProducts = fullNotRec.map(product => {
    return {
      _id: product._id,
      product: product.title.ua,
    };
  });

  const user = await User.findByIdAndUpdate(
    _id,
    {
      bloodType,
      height,
      age,
      curWeight,
      desWeight,
      dailyCalorie,
      notRecProducts,
    },
    {
      new: true,
    }
  );

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name: user.name,
        bloodType: user.bloodType,
        height: user.height,
        age: user.age,
        curWeight: user.curWeight,
        desWeight: user.desWeight,
        dailyCalorie: user.dailyCalorie,
        notRecProducts: user.notRecProducts,
      },
    },
  });
};

module.exports = updateUser;
