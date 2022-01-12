//EXPRESS CONFIGS
const express = require('express');
const router = express.Router();
const checkData = require('../controllers/registerValidator');

//GET ROUTES
const homeRoute = require('./get/home');
const registerRoute = require('./get/register');


router.get('/', homeRoute);
router.get('/register', registerRoute);

//POST ROUTES
const registerPostRoute = require('./post/register');
router.post('/register', checkData.validationBodyRules, checkData.checkRules, registerPostRoute);

module.exports = router;