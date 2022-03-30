const User = require('../../database/models/userModel');
const dbConnect = require('../../database/connection/dbconnect');
const passwordUtil = require('../../utils/passwordUtil');
const jwt = require('jsonwebtoken');
const jwtController = require('../../controllers/jwtController');


const registerUser = async (req, res, next) => {

    await passwordUtil.hashesPassword(req.body.password).then((hashedPassword) => {
        User.create({
            email: req.body.email,
            password: hashedPassword
        }, function (err, user) {
            if (!err) {
                const token = jwtController.createToken(user._id);
                const maxAge = 3 * 24 * 60 * 60 * 1000;
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge
                })
                //check if user is logged in and log it in or redirect
                res.redirect('/index');
            } else {
                const error = {
                    msg: "User couldn't be created. Contact the system admin"
                };
                const alert = [error]

                res.render('../public/views/pages/register.ejs', {
                    alert
                });
            }

        })
    })
};

module.exports = registerUser;