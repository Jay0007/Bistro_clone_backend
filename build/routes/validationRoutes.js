"use strict";

var express = require('express');

var router = express.Router(); // eslint-disable-next-line no-unused-vars

var dotenv = require('dotenv');

dotenv.config();

var validationController = require('../controllers/validationController'); // validation routes


router.post('/user/register', validationController.registration_user);
router.post('/user/login', validationController.login_user);
router.get('/user/logout', validationController.logout_user);
module.exports = router;