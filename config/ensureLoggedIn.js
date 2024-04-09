module.exports = fucntion (req, res, next) {
    if (req.isAuthenticated() ) return next ();
    res.redirected('/auth/google');
};