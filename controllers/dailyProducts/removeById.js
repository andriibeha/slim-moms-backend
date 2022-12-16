const { DailyProduct } = require('../../models');
const { RequestError } = require('../../helpers');

const removeById = async (req, res) => {
  const { productId } = req.params;

  const removedProduct = await DailyProduct.findByIdAndRemove(productId);

  if (!removedProduct) {
    throw RequestError(404, `Product with id: '${productId}'  not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: { removedProduct },
  });
};

module.exports = removeById;
