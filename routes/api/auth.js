const express = require('express');
const router = express.Router();
const { joiSessionSchema } = require('../../models/session');
//Розкидати нормально по папках як має бути по архітектурі. (ctrlWrapper має бути в хелперсах і тд тп)

const ctrl = require('../../controllers/auth');
const {
  ctrlWrapper,
  userRegisterValidation,
  userLoginValidation,
  auth,
  validation,
} = require('../../middelwares');

router.post('/register', userRegisterValidation, ctrlWrapper(ctrl.register));
router.post('/login', userLoginValidation, ctrlWrapper(ctrl.login));
router.get('/logout', auth, ctrlWrapper(ctrl.logout));
router.post(
  '/refresh',
  validation(joiSessionSchema),
  ctrlWrapper(ctrl.refreshTokens)
);

module.exports = router;
