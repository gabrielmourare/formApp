//EXPRESS CONFIGS
const express = require('express');
const router = express.Router();
const checkData = require('../controllers/validator');

//GET ROUTES
const homeRoute = require('./get/home');
const registerRoute = require('./get/register');


router.get('/', homeRoute);
router.get('/register', registerRoute);

//POST ROUTES
const registerPostRoute = require('./post/register');
router.post('/register', checkData.registerValidator, checkData.registerUserValidator, checkData.checkRules, registerPostRoute);

module.exports = router;