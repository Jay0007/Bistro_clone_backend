const express = require('express');

const router = express.Router();
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv');

dotenv.config();

const validationController = require('../controllers/validationController');

// validation routes
router.post('/user/register', validationController.registration_user);

router.post('/user/login', validationController.login_user);

router.get('/user/logout', validationController.logout_user);

module.exports = router;
