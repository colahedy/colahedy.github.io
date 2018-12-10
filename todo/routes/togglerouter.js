var express = require('express');
var router = express.Router();
var todo = require("../mongo/mongoose").todo;

router.get('/:itemId', (req, res) => {
    var itemId = req.params.itemId
    todo.findById(itemId, (err, result) =>{
        console.log('tag', result)
        todo.findByIdAndUpdate(itemId, {
            isFinished: !result.isFinished
        }, (err1, result1) =>{
            if(err1){
                console.log(err1)
            }
        })
    })
     res.redirect('/');
});
module.exports = router;
