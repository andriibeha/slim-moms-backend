const { BloodDietProduct } = require('../../models');

const queryProducts = async (req, res) => {
  const { title } = req.query;

  const result = await BloodDietProduct.find({});

  if (result) {
    const queryProduct = result.filter(result =>
      result.title.ua.includes(title)
    );

    res.json({
      status: 'success',
      code: 200,
      queryProduct,
    });
  }
};

module.exports = queryProducts;
