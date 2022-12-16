const express = require('express');
const router = express.Router();
const { dailyProducts: ctrl } = require('../../controllers');
const { ctrlWrapper, validation } = require('../../middelwares');
const { joiSchema } = require('../../models/dailyProduct');

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addOne));
router.get('/', ctrlWrapper(ctrl.getByDate));
router.delete('/:productId', ctrlWrapper(ctrl.removeById));

module.exports = router;
