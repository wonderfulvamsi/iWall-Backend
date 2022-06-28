const checkpassword = (req, res, next) => {
    if (req.body.password === process.env.Admin_Password) {
        next();
    }
    else {
        res.status(200).json("Wrong Password Sucker!");
    }
}

module.exports = checkpassword;