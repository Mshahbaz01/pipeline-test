const http = require('http');
http.createServer((req, res) => {
  res.end('Hello Digifloat!');
}).listen(3000);