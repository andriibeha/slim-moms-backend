const ctrlWrapper = ctrl => {
  console.log('##CTRLWraper');

  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
