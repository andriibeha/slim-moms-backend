const express = require('express');
const router = express.Router();
const { joiSessionSchema } = require('../../models/session');

//Розкидати нормально по папках як має бути по архітектурі. (ctrlWrapper має бути в хелперсах і тд тп)
const {
  ctrlWrapper,
  userRegisterValidation,
  userLoginValidation,
  auth,
  validation,
} = require('../../middelwares');

const {
  register,
  login,
  logout,
  refreshTokens,
} = require('../../controllers/auth');

router.post('/register', userRegisterValidation, ctrlWrapper(register));

router.post('/login', userLoginValidation, ctrlWrapper(login));

router.get('/logout', auth, ctrlWrapper(logout));

router.post(
  '/refresh',
  validation(joiSessionSchema),
  ctrlWrapper(refreshTokens)
);

module.exports = router;
