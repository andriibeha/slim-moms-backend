const { DailyProduct, BloodDietProduct } = require('../../models');

const getProducts = async () => {
  const result = await BloodDietProduct.find({});
  return result;
};

const addOne = async (req, res) => {
  const { _id } = req.user;

  const { weight, product, date } = req.body;
  const products = await getProducts();
  const productCaloricity = products.find(
    it => it.title.ua === product
  ).calories;
  const calories = (productCaloricity * weight) / 100;

  const savedProduct = await DailyProduct.find({ date, owner: _id });
  // console.log(savedProduct);

  const duplicateProduct = await savedProduct.find(
    it => it.product === product
  );

  let result;
  if (!duplicateProduct) {
    result = await DailyProduct.create({
      ...req.body,
      calories,
      owner: _id,
    });
  } else {
    result = await DailyProduct.findByIdAndUpdate(
      duplicateProduct._id,
      {
        product: duplicateProduct.product,
        weight: Math.round(duplicateProduct.weight + weight),
        calories: Math.round(duplicateProduct.calories + calories),
      },
      {
        new: true,
      }
    );
  }

  !duplicateProduct
    ? res.status(201).json({
        status: 'succes',
        code: 201,
        data: { result },
      })
    : res.status(200).json({
        status: 'succes',
        code: 200,
        data: { result },
      });
};

module.exports = addOne;

// const { DailyProduct, BloodDietProduct } = require('../../models');

// const getProducts = async () => {
//   const result = await BloodDietProduct.find({});

//   return result;
// };

// const addOne = async (req, res) => {
//   // const { _id } = req.user;
//   const { weight, product } = req.body;
//   const products = await getProducts();
//   const productCaloricity = products.find(
//     it => it.title.ua === product
//   ).calories;
//   const calories = (productCaloricity * weight) / 100;

//   const result = await DailyProduct.create({
//     ...req.body,
//     calories,
//   });
//   res.status(201).json({
//     status: 'succes',
//     code: 201,
//     data: { result },
//   });
// };

// module.exports = addOne;
