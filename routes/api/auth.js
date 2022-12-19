const express = require('express');
const router = express.Router();
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
const { joiSessionSchema } = require('../../models/session');

router.post('/register', userRegisterValidation, ctrlWrapper(register));
router.post('/login', userLoginValidation, ctrlWrapper(login));
router.get('/logout', auth, ctrlWrapper(logout));
router.post(
  '/refresh',
  validation(joiSessionSchema),
  ctrlWrapper(refreshTokens)
);

module.exports = router;
