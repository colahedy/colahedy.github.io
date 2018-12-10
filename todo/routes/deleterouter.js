var express = require('express');
var router = express.Router();
var todo = require('../mongo/mongoose').todo;

router.get('/:itemId', (req, res) => {
    var itemId = req.params.itemId;
    todo.findByIdAndDelete(itemId,(err) =>{
        console.log("删除成功");
    })
     res.redirect('/');
});

module.exports = router;