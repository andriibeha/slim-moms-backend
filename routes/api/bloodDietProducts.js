const express = require('express');
const router = express.Router();
const { bloodDietProducts: ctrl } = require('../../controllers');
const {bloodDietProductsUser: ctrl} = require("../../controllers/bloodDietProductUser")
const { ctrlWrapper } = require('../../middelwares');

router.get('/', ctrlWrapper(ctrl.getDiet));
router.get('/:id', ctrlWrapper(ctrl.bloodDietProductsUser));

module.exports = router;
