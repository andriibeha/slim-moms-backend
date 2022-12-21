const { DailyProduct } = require('../../models');
const { RequestError } = require('../../helpers');

const getAll = async (req, res) => {
  const { _id } = req.user;
  const result = await DailyProduct.find(_id);
  if (!result.length) {
    throw RequestError(404, 'Not found added products');
  }

  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getAll;
