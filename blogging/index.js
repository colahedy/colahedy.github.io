var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var mongostore = require('connect-mongo')(session);
var db = require('./mongo/mongoose').db;

app.use(express.static('html'));

app.set('views', './views/');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie:{
            maxAge: 24*60*60*100
        },
        store: new mongostore({
            mongooseConnection: db
        })
    })
)

app.use(flash());
app.use((req, res, next) =>{
    res.locals.user = req.session.user
    res.locals.success = req.flash("success").toString()
    res.locals.error =req.flash("error").toString()
    next()
});

app.use('/', require('./routes/indexrouter'));
app.use('/login', require('./routes/loginrouter'));
app.use('/registe', require('./routes/registerouter'));
app.use('/logout', require('./routes/logoutrouter'));
app.use('/posts', require('./routes/postrouter'));

app.listen(8080, () => {
    console.log(`================`);
});