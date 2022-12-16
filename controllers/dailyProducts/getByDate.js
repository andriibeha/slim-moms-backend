const { DailyProduct } = require('../../models');
const { RequestError } = require('../../helpers');

const getByDate = async (req, res) => {
  // const { _id } = req.user;
  const { date } = req.query;
  const result = await DailyProduct.find({ date });
  if (!result.length) {
    throw RequestError(404, 'Not found');
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getByDate;
