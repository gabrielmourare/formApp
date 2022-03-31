const User = require('../database/models/userModel');
const connectDb = require('../database/connection/dbconnect');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.cookies.jwt;

    // check if token exists and is valid \/

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                res.redirect('/login');
            } else {
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
            if (err) {
                console.log(err);
                res.locals.user = null
                next();
            } else {
                connectDb.connectDB();

                let user = await User.findById(decoded.userId);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = {
    authenticate,
    checkUser
}