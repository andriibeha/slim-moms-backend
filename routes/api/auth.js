const express = require('express');
const router = express.Router();
const {
  ctrlWrapper,
  userRegisterValidation,
  userLoginValidation,
} = require('../../middelwares');
const { register, login } = require('../../controllers/auth');

router.post('/register', userRegisterValidation, ctrlWrapper(register));
router.post('/login', userLoginValidation, ctrlWrapper(login));

module.exports = router;
