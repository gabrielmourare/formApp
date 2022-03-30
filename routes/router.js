//EXPRESS CONFIGS
const express = require('express');
const router = express.Router();
const checkData = require('../controllers/validator');
const checksJwt = require('../controllers/authController');


//GET ROUTES
const loginRoute = require('./get/login');
const registerRoute = require('./get/register');
const dashboardRoute = require('./get/index');

router.get('/', loginRoute);
router.get('/login', loginRoute);
router.get('/register', registerRoute);
router.get('/dashboard', checksJwt, dashboardRoute);

//POST ROUTES
const registerPostRoute = require('./post/register');
const loginPostRoute = require('./post/login');
router.post('/', loginPostRoute)
router.post('/login', loginPostRoute);
router.post('/register', checkData.registerValidator, checkData.registerUserValidator, checkData.checkRules, registerPostRoute);


module.exports = router;