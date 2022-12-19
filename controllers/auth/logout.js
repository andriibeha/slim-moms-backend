const { User } = require('../../models');
// сonst { Session } = reguire('../../models');

const logout = async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.user.id },
    { token: null },
    { new: true }
  );

  res.json({
    status: 'success',
    code: 204,
    data: {
      message: 'No Content',
    },
  });
};

module.exports = logout;

// const logout = async (req, res) => {
// const currentSession = req.session;
// await Session.deleteOne({ _id: currentSession._id });
// res.status(204).json();
// };

// module.export = logout;
