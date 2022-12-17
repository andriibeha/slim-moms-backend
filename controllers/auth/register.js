const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const { RequestError } = require('../../helpers');

const register = async (req, res) => {
  const { name, password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new RequestError('Email in use');
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const result = await User.create({
    password: hashPassword,
    email,
    name,
  });

  res.status(201).json({
    Status: 'Created',
    Code: 201,
    ResponseBody: {
      user: {
        name,
        email,
      },
    },
  });
};

module.exports = register;
