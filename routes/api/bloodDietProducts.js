const express = require('express');
const router = express.Router();
const { getDiet } = require('../../controllers/bloodDietProducts');
const ctrl = require('../../controllers/bloodDietProductUser');
const { ctrlWrapper, validation, auth } = require('../../middelwares');
const { getBloodDietSchema } = require('../../models');
const { getUsersDateSchema } = require('../../models');

router.post('/', validation(getBloodDietSchema), ctrlWrapper(getDiet)); // Мав би бути ще один такий роут але приватний.
router.get('/all', ctrlWrapper(ctrl.allProducts));
router.get('/all/query', ctrlWrapper(ctrl.queryProducts));
router.post(
  '/user',
  auth,
  validation(getUsersDateSchema),
  ctrlWrapper(ctrl.bloodDietProductUser)
); // Це має бути приватний роут. Сюди приходять Нулі і повертає пустий масив

module.exports = router;
