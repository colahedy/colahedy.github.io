var express = require('express');
var app = express();
//静态文件
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});