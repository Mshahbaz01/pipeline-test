const http = require('http');
http.createServer((req, res) => {
  res.end('Hello Digifloat - From Shahbaz!');
}).listen(3000);