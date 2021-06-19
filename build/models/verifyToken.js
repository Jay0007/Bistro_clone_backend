"use strict";

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  var token = req.cookie.authtoken;

  if (!token) {
    res.status(400).redirect('/login');
  }

  try {
    var verified = jwt.verify(token, process.env.tokenKey);
    req.user = verified;
  } catch (err) {
    res.status(400).redirect('/login');
  }

  next();
};