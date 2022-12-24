const { DailyProduct } = require('../../models');
const { RequestError } = require('../../helpers');

const getProducts = async () => {
  const result = await DailyProduct.find({});
  return result;
};

const getByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.query;

  const result = await DailyProduct.find({ date, owner: _id });

  if (!result.length) {
    throw RequestError(404, 'Not found');
  }

  const caloricityPerDay = result.reduce((acc, it) => {
    acc += it.calories;
    return acc;
  }, 0);

  const products = getProducts({ owner: _id });
  const dateFirstAdded = (await products).sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })[0].date;

  res.json({
    status: 'success',
    code: 200,
    data: { result, date: new Date(date), caloricityPerDay, dateFirstAdded },
  });
};

module.exports = getByDate;
