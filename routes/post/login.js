const passwordUtil = require('../../utils/passwordUtil');
const bcrypt = require('bcrypt');
const jwtController = require('../../controllers/jwtController');

const loginUser = async (req, res, next) => {
    const userEmail = req.body.email;
    const passwordAttempt = req.body.password;

    const userAttempting = {
        email: userEmail,
        password: passwordAttempt
    }

    passwordUtil.checksPassword(userAttempting).then(authenticUser => {
        if (authenticUser) {
            const maxAge = 3 * 24 * 60 * 60 * 1000;
            const token = jwtController.createToken(authenticUser._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge
            })
            res.status(200).redirect('/dashboard');
        }
    })
}

module.exports = loginUser;