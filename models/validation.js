const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');

// eslint-disable-next-line new-cap
const validationSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      max: 255,
      min: 3,
    },
  },
  { timestamps: true }
);
validationSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(this.password, salt);
  this.password = hashPass;
  next();
});

const valSchema = mongoose.model('user', validationSchema);

const registrationSchema = (data) => {
  const registrationValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(3).required(),
  });
  return registrationValidation.validate(data);
};
const loginSchema = (data) => {
  const loginValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(3).required(),
  });
  return loginValidation.validate(data);
};

module.exports = { registrationSchema, loginSchema, valSchema };
