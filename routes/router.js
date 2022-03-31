//EXPRESS CONFIGS
const express = require('express');
const router = express.Router();
const checkData = require('../controllers/validator');
const authController = require('../controllers/authController');


//GET ROUTES
const loginRoute = require('./get/login');
const registerRoute = require('./get/register');
const dashboardRoute = require('./get/dashboard');
const homeRoute = require('./get/homeRoute');
const logoutRoute = require('./get/logout');


router.get('/', homeRoute);
router.get('/login', loginRoute);
router.get('/register', registerRoute);
router.get('/dashboard', authController.authenticate, dashboardRoute);
router.get('/logout', logoutRoute);
//POST ROUTES
const registerPostRoute = require('./post/register');
const loginPostRoute = require('./post/login');

router.post('/login', loginPostRoute);
router.post('/register', checkData.registerValidator, checkData.registerUserValidator, checkData.checkRules, registerPostRoute);


module.exports = router;