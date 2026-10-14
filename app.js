const http = require('http');
http.createServer((req, res) => {
  res.end('Hello Digifloat v2 - auto deployed!');
}).listen(3000);