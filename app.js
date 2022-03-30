//UTILITARIES
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//DB URI and Connection
const dbURI = process.env.MONGO_URI;
const dbConnect = require('./database/connection/dbconnect');


//SERVER SETUP
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ // ALLOWS BODY PARSER
    extended: false
}));
app.use(cookieParser());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//ROUTER
const router = require('./routes/router');



app.use('/', router);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`${"Server running on port "+PORT}`);
});




module.exports = app;