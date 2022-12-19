const express = require('express');
const router = express.Router();
const { bloodDietProducts: ctrl } = require('../../controllers');
const {
  bloodDietProductsUser,
  queryProducts,
  allProducts
} = require('../../controllers/bloodDietProductUser/bloodDietProductUser');
const { ctrlWrapper } = require('../../middelwares');

router.get('/', ctrlWrapper(ctrl.getDiet));
router.get('/all', ctrlWrapper(allProducts));
router.get('/all/query', ctrlWrapper(queryProducts));
router.get('/:id', ctrlWrapper(bloodDietProductsUser));

module.exports = router;
