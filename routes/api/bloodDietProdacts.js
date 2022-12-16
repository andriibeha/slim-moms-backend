const express = require('express');
const router = express.Router();
const { bloodDietProducts: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../middelwares');

router.get('/', ctrlWrapper(ctrl.getDiet));

module.exports = router;
