"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* eslint-disable new-cap */
var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var validation = require('../models/validation');

var maxAge = 60 * 60;

var createToken = function createToken(id) {
  return jwt.sign({
    id: id
  }, process.env.tokenKey);
}; // eslint-disable-next-line func-names


module.exports.registration_user = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _yield$validation$reg, error, emailExist, Validation;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return validation.registrationSchema(req.body);

          case 2:
            _yield$validation$reg = _context.sent;
            error = _yield$validation$reg.error;

            if (!error) {
              _context.next = 8;
              break;
            }

            res.status(400).send(error);
            _context.next = 12;
            break;

          case 8:
            _context.next = 10;
            return validation.valSchema.findOne({
              email: req.body.email
            });

          case 10:
            emailExist = _context.sent;

            if (emailExist) {
              res.status(400).send('email already exist');
            } else {
              Validation = new validation.valSchema(req.body);
              Validation.save().then(function (result) {
                var token = createToken(req.body.email);
                res.status(200).cookie('authtoken', token, {
                  httpOnly: true,
                  maxAge: maxAge
                }).send(result);
              })["catch"](function (err) {
                res.send(err);
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports.login_user = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _validation$loginSche, error, user, validPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _validation$loginSche = validation.loginSchema(req.body), error = _validation$loginSche.error;

            if (!error) {
              _context2.next = 5;
              break;
            }

            res.status(400).send(error);
            _context2.next = 16;
            break;

          case 5:
            _context2.next = 7;
            return validation.valSchema.findOne({
              email: req.body.email
            });

          case 7:
            user = _context2.sent;

            if (!user) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return bcrypt.compare(req.body.password, user.password);

          case 11:
            validPassword = _context2.sent;

            if (validPassword) {
              // Creating and assigning a token
              // token goes in a cookie
              // eslint-disable-next-line no-underscore-dangle
              token = createToken(user._id);
              res.status(200).cookie('authtoken', token, {
                httpOnly: true,
                maxAge: maxAge
              }).send(token);
            } else {
              res.status(400).send('Password is wrong...');
            }

            _context2.next = 16;
            break;

          case 15:
            res.status(400).send('email does not exist...');

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // module.exports.login_user = async (req, res) => {
//   const { error } = validation.loginSchema(req.body)
//   if (error) {
//     res.status(400).send(error.details[0].message)
//   }
//   //checking for emails in database if it exist
//   const user = await validation.valSchema.findOne({ email: req.body.email })
//   if (!user) {
//     res.status(400).send('email does not exist...')
//   }
//   const validPassword = await bcrypt.compare(req.body.password, user.password)
//   if (!validPassword) {
//     res.status(400).send('Password is wrong...')
//   }
//   //Creating and assigning a token
//   //token goes in a cookie
//   console.log(process.env.tokenKey)
//   var token = jwt.sign({ _id: user._id }, process.env.tokenKey)
//   res
//     .status(200)
//     .header('auth-token', token)
//     .send(user)
// }


module.exports.logout_user = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // res.cookie('auth-token', '', {maxAge:1})
            res.cookie('auth-token', '').send('Logged out...');

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();