const HttpStatus = require('http-status-codes');

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(StatusCodes.UNAUTHORIZED).send({ error: 'You must log in!' });
  }

  next();
};
