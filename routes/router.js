//EXPRESS CONFIGS
const express = require('express');
const router = express.Router();


//GET ROUTES
const homeRoute = require('./get/home');
const registerRoute = require('./get/register');


router.get('/', homeRoute);
router.get('/register', registerRoute);

//POST ROUTES
const registerPostRoute = require('./post/register');
router.post('/register', registerPostRoute);

module.exports = router;