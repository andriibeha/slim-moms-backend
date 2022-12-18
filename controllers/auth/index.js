const register = require('./register');
const login = require('./login');
const refreshTokens = require('./refreshTokens');
const logout = require("./logout")

module.exports = {
  register,
  login,
  refreshTokens,
  logout
};
