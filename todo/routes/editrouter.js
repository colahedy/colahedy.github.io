var express = require('express');
var router = express.Router();
var todo = require('../mongo/mongoose').todo;

router.get('/', (req, res) => {
    res.send('edit GET');
});

router.post('/:itemId', (req, res) => {
    console.log(req.body)
    console.log(req.params.itemId)
    var itemId = req.params.itemId
    todo.findByIdAndUpdate(itemId,{
        content:req.body.item
    },(err) =>{
        console.log('更新成功');
        res.redirect('/');
    })
});

module.exports = router;
