const User = require('../../database/models/userModel');
const dbConnect = require('../../database/connection/dbconnect');
const passwordUtil = require('../../utils/passwordUtil');
const errorHandler = require('../../utils/errorHandler');


const registerUser = (req, res, next) => {
    dbConnect.connectDB();
    User.findOne({
            email: req.body.email
        })

        .then((user) => {
            if (user) {

                const error = {
                    msg: "User already exists!"
                };
                const alert = [error]

                res.render('../public/views/pages/register.ejs', {
                    alert
                });

            } else {
                passwordUtil(req.body.password).then((hashedPassword) => {
                    User.create({
                        email: req.body.email,
                        password: hashedPassword
                    }, function (err, user) {
                        if (!err) {
                            res.redirect('../../public/views/pages/home.ejs');
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
                });
            }
        })


};

module.exports = registerUser;