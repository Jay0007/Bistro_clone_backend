"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcryptjs');

var Joi = require('@hapi/joi'); // eslint-disable-next-line new-cap


var validationSchema = new Schema({
  email: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 3
  }
}, {
  timestamps: true
});
validationSchema.pre('save', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    var salt, hashPass;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.genSalt(10);

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return bcrypt.hash(this.password, salt);

          case 5:
            hashPass = _context.sent;
            this.password = hashPass;
            next();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var valSchema = mongoose.model('user', validationSchema);

var registrationSchema = function registrationSchema(data) {
  var registrationValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(3).required()
  });
  return registrationValidation.validate(data);
};

var loginSchema = function loginSchema(data) {
  var loginValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(3).required()
  });
  return loginValidation.validate(data);
};

module.exports = {
  registrationSchema: registrationSchema,
  loginSchema: loginSchema,
  valSchema: valSchema
};