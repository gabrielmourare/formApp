//UTILITARIES
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

//DB URI
const dbURI = process.env.MONGO_URI;


//SERVER SETUP
const express = require('express');
const app = express();



app.listen(3000, () => {
    console.log(`${"Server running on port "+PORT}`);
});