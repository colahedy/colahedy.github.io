var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});
app.get('/process_get', (req, res) => {
    var response ={
        "first_name":req.query.first_name,
        "last_name":req.query.first_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8080, 'localhost', function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log('running at http://' + host + ':' + port)
   
  })