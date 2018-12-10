var express = require('express');
var app = express();
//路由
app.get('/', (req, res) => {
    console.log("主页get请求");
    res.send('Hello get');
});
app.post('/', (req, res) => {
    console.log("主页post请求");
    res.send('Hello post');
});

app.get('/deletepage', (req, res) => {
    console.log('/nextpage 响应DELETE请求');
    res.send('删除页面');
});
app.get('/nextpage', (req, res) => {
    console.log('/nextpage get请求');
    res.send('用户列表请求');
});
app.get('/ab*cd', (req, res) => {
    console.log('/ab*cd get请求');
    res.send('正则匹配');
});

var server = app.listen(8080, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })