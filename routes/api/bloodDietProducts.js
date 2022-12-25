const express = require('express');
const router = express.Router();
const { getDiet } = require('../../controllers/bloodDietProducts');
const ctrl = require('../../controllers/bloodDietProductUser');
const { ctrlWrapper, validation, auth } = require('../../middelwares');
const { getBloodDietSchema } = require('../../models');

router.post('/', validation(getBloodDietSchema), ctrlWrapper(getDiet));
router.get('/all', ctrlWrapper(ctrl.allProducts));
router.get('/all/query', ctrlWrapper(ctrl.queryProducts)); // ЦЕ НЕ ПРАЦЮЄ
router.post('/:id', auth, ctrlWrapper(ctrl.bloodDietProductUser)); // ЩО ЦЕ ТАКЕ І ЩО ТУТ РОБИТЬСЯ?

module.exports = router;
