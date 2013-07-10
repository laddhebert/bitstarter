var express = require('express');

var app = express.createServer(express.logger());

var index_html = fs.readFileSync('./index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
})

var index_buf = new Buffer(index_html);


app.get('/', function(request, response) {
  response.send(index_buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
