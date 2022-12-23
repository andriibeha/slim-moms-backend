const express = require('express');
const router = express.Router();
const { getDiet } = require('../../controllers/bloodDietProducts');
const ctrl = require('../../controllers/bloodDietProductUser');
const { ctrlWrapper, validation } = require('../../middelwares');
const { getBloodDietSchema } = require('../../models/bloodDietProduct');

router.post('/', validation(getBloodDietSchema), ctrlWrapper(getDiet));
router.get('/all', ctrlWrapper(ctrl.allProducts));
router.get('/all/query', ctrlWrapper(ctrl.queryProducts));
router.get('/:id', ctrlWrapper(ctrl.bloodDietProductUser));

module.exports = router;
