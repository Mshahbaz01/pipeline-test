const http = require('http');
http.createServer((req, res) => {
  res.end('Hello This is automated message from shahbaz!');
}).listen(3000);