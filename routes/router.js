const express = require('express');
const router = express.Router();
const homeRoute = require('./get/home');

router.get('/', homeRoute);


module.exports = router;