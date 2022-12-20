const validation = require('./validation');
const ctrlWrapper = require('./ctrlWrapper');
const userRegisterValidation = require('./userRegisterValidation');
const userLoginValidation = require('./userLoginValidation');
const auth = require('./auth');

module.exports = {
  auth,
  validation,
  ctrlWrapper,
  userRegisterValidation,
  userLoginValidation,
};
