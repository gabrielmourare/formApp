const registerRoute = (req, res) => {
    res.render('../public/views/pages/register.ejs', {
        title: "Thanks for registering.",
        message: "You'll soon be redirected"
    });
};

module.exports = registerRoute;