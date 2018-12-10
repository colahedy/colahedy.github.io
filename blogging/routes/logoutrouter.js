var express = require('express');
var router = express.Router();
var user = require('../mongo/mongoose').user;

router.get('/', (req, res) => {
    req.session.user = null
     res.redirect('back');
});
module.exports = router