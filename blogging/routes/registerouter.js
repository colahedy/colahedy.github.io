var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')
var multer = require('multer')
var user = require('../mongo/mongoose').user

var storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.username + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
})

router.get('/', (req, res) => {
    res.render('registe');
});
router.post('/', upload.single('avatar'), (req, res) => {
    var username = req.body.username
    var password = req.body.password
    var avatat = req.file
    var gender = req.body.gender
    var introduce = req.body.introduce

    try{
        if(!username){
            throw new Error('用户名不能为空')
        }
        if(!password){
            throw new Error('密码不能为空')
        }
        if(!avatat){
            throw new Error('请选择一个图片作为头像')
        }
        if(!introduce){
            throw new Error('请填写个人简介')
        }
    }catch(e){
        if(avatat){
            fs.unlink(avatat.path, (err) =>{
                if(err){
                    console.log("头像删除失败", err)
                }else{
                    console.log("头像删除成功")
                }
            })
        }
        req.flash("error", e.message);
        res.redirect('back');
        return;
    }

    user.create({
        username: username,
        password: password,
        avatat: avatat.filename,
        introduce: introduce,
        gender: gender
    },(err, result) =>{
        if(err){
            console.log('添加数据库失败', err)
            req.flash("success", '用户名已存在')
            res.redirect('/login');
        }else{
            // 将当前用户写入 session 以后判断登陆就看session里面有没有 user
            req.session.user = result
            console.log('添加数据库成功, 注册成功')
            req.flash("success", '注册成功')
            res.redirect('/login');
        }
    })
});

module.exports = router;

