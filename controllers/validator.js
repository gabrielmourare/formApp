const User = require('../database/models/userModel');
const dbConnect = require('../database/connection/dbconnect');
const {
    body,
    validationResult,
    check
} = require('express-validator');


exports.registerValidator = [
    body('email').not().isEmpty().withMessage('Enter a valid email.'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('email').normalizeEmail(),
    body('password').not().isEmpty().withMessage('Enter a password'),
    body('password').isLength({
        min: 6
    }).withMessage('Password must be at least 6 characters long').custom((value, {
        req
    }) => {
        if (value === req.body.confirmPassword) {
            return true;
        } else {
            return false;
        }
    }).withMessage('Passwords must match!')


];

exports.registerUserValidator = [

    check('email').custom(email => {
        dbConnect.connectDB();
        return User.findOne({
                email
            })
            .then(user => {
                if (user) {
                    return Promise.reject('User already exists');
                }
            });
    })
]

exports.checkRules = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array({
            onlyFirstError: true
        });
        res.render('../public/views/pages/register.ejs', {
            alert
        });
    } else {
        next();
    }
};