exports.checkLogin = (req, res, next) =>{
    if(!req.session.user){
        req.flash("error", '请先登录')
        return  res.redirect('/login');
    }
    next()
}