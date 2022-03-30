const bcrypt = require('bcrypt');
const dbConnect = require('../database/connection/dbconnect');
const saltRounds = 10;
const User = require('../database/models/userModel');

async function hashesPassword(plainPassword) {

    let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    return hashedPassword;

}

async function checksPassword(userAttempting) {

    dbConnect.connectDB();

    return await User.findOne({
            email: userAttempting.email
        })

        .then(user => {
            if (!user) {
                console.log("User not found!");
                return false;
            } else {

                if (bcrypt.compare(userAttempting.password, user.password)) {
                    return user;
                } else {
                    console.log("wrong password")
                    return false;
                }

            }
        })

        .catch(err => {
            console.log("Something went wrong in the server: " + err);
            return false;
        })
}

module.exports = {
    hashesPassword,
    checksPassword
}