
var fs = require('fs');

var index_html = fs.readFileSync("index.html");
console.log(index_html)

var index_buf = new Buffer(index_html);
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
