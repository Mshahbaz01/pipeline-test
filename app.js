const http = require('http');
http.createServer((req, res) => {
  res.end('Hello Digifloat - From Digifloat!');
}).listen(3000);