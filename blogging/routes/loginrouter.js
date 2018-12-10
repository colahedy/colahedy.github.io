var express = require('express');
var router = express.Router();
var user = require('../mongo/mongoose').user;

router.get('/', (req, res) => {
     res.render('login');
});

router.post('/', (req, res) => {
    console.log('req.body', req.body)
    var username = req.body.username
    var password = req.body.password

    try{
        if(!username){
            throw new Error('请输入用户名')
        }
        if(!password){
            throw new Error("请输入密码")
        }
    }catch(e){
        req.flash("error", e.message)
        res.redirect('back');
        return
    }

    user.findOne({
        username:username
    },(err, result) =>{
        if(err){
            console.log('查找用户名失败', err)
        }
        if(!result){
            req.flash("error", '用户名不存在')
            return  res.redirect('back');
        }
        if(result.password != password){
            req.flash("error", '密码错误')
            res.redirect('back')
        }else{
            req.session.user = result
            req.flash("success", '登录成功')
            res.redirect('/posts?author=' + result._id);
        }
    })
});
module.exports = router;

