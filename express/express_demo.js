var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8080, 'localhost', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log('running at http://' + host + ':' + port)
 
})