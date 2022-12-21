const { User, Session } = require('../../models');
const { RequestError } = require('../../helpers');
const jwt = require('jsonwebtoken');

const { SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new RequestError('Email is wrong or verify or password is wrong');
  }

  const payload = {
    id: user._id,
  };

  // const newSession = await Session.create({
  //   uid: user._id,
  // });

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
  // const token = jwt.sign({ uid: user._id, sid: newSession._id }, SECRET_KEY, {
  //   expiresIn: '1h',
  // });
  // const refreshToken = jwt.sign(
  //   { uid: user._id, sid: newSession._id },
  //   REFRESH_SECRET_KEY,
  //   {
  //     expiresIn: '20d',
  //   }
  // );
  await User.findByIdAndUpdate(user._id);
  // await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
      // refreshToken,
      user: {
        email,
        name: user.name,
      },
    },
  });
};

module.exports = login;
