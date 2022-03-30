const jwt = require('jsonwebtoken');

function createToken(userId) {
    const maxAge = 3 * 24 * 60 * 60;

    const token = jwt.sign({
        userId
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: maxAge
    })

    return token;
}


module.exports = {
    createToken
}