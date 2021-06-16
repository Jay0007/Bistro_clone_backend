const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.cookie.authtoken;
  if (!token) {
    res.status(400).redirect('/login');
  }
  try {
    const verified = jwt.verify(token, process.env.tokenKey);
    req.user = verified;
  } catch (err) {
    res.status(400).redirect('/login');
  }
  next();
};
