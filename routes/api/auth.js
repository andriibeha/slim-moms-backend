const express = require('express');
const router = express.Router();
const {
  ctrlWrapper,
  userRegisterValidation,
  userLoginValidation,
} = require('../../middelwares');
const { register, login, logout } = require('../../controllers/auth');

router.post('/register', userRegisterValidation, ctrlWrapper(register));
router.post('/login', userLoginValidation, ctrlWrapper(login));
router.get('/logout', auth, ctrlWrapper(logout));

module.exports = router;
