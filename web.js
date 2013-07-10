var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer("Teste testando sendo testado.");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
