const registerUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    console.log(email);
    console.log(password);
    console.log(password2);
};

module.exports = registerUser;