const { BloodDietProduct } = require('../../models');
const { RequestError } = require('../../helpers');

const getDiet = async (req, res, next) => {
  //   "ФОРМУЛА ДЛЯ РОЗРАХУНКУ ДЕННОЇ НОРМИ КАЛОРІЙ ДЛЯ ЖІНОК
  // 10 * вага + 6.25 * зріст - 5 * вік - 161 - 10 * (вага - бажана вага)"
  const { blood, height, age, cWeight, dWeight } = req.body;
  const dailyCalorie = Math.round(
    10 * cWeight + 6.25 * height - 5 * age - 161 - 10 * (cWeight - dWeight)
  );
  const data = await BloodDietProduct.find();
  const products = data
    .reduce((array, item) => {
      if (item.groupBloodNotAllowed[blood]) {
        array.push(item);
      }
      return array;
    }, [])
    .slice(0, 4);
  if (!products.length) {
    throw RequestError(404, 'Not found');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: {
        products,
        dailyCalorie,
      },
    },
  });
};

module.exports = getDiet;
