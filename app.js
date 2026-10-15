const http = require('http');
http.createServer((req, res) => {
  res.end('Hello This is automated message from Digifloat!');
}).listen(3000);