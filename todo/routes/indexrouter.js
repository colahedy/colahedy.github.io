var express = require('express');
var router = express.Router();
var todo = require('../mongo/mongoose').todo

router.get('/', (req, res) => {
    todo.find((err, restult) => {
        console.log(restult)
        // 使用 模板引擎渲染
        res.render('homepage', {
            title: 'HEllo',
            items: restult
        });
    })
});

router.post('/', (req, res) => {
    if (req.body.item) {
        todo.create({
            content: req.body.item
        }, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('写入成功')
        })
    }
    res.redirect('/');
});

module.exports = router;