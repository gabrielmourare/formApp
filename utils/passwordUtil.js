const bcrypt = require('bcrypt');
const saltRounds = 10;

async function passwordUtil(plainPassword) {

    let hashedPassword = bcrypt.hash(plainPassword, saltRounds);

    return hashedPassword;

}

module.exports = passwordUtil;