//UTILITARIES
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

//DB URI and Connection
const dbURI = process.env.MONGO_URI;
const dbConnect = require('./database/connection/dbconnect');


//SERVER SETUP
const express = require('express');
const app = express();

//ROUTER
const router = require('./routes/router');

app.use('/', router);

app.listen(3000, () => {
    console.log(`${"Server running on port "+PORT}`);
});