const {
    promiseImpl
} = require('ejs');
const {
    body,
    validationResult
} = require('express-validator');

exports.validationBodyRules = [
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


exports.checkRules = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.render('../public/views/pages/register.ejs', {
            alert
        });
    } else {
        next();
    }
};