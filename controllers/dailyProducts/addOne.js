const { DailyProduct } = require('../../models');

const addOne = async (req, res) => {
  // const { _id } = req.user;

  const result = await DailyProduct.create({
    ...req.body,
  });
  res.status(201).json({
    status: 'succes',
    code: 201,
    data: { result },
  });
};

module.exports = addOne;
