const http = require('http');
http.createServer((req, res) => {
  res.end('Hello This is autmated message from shahbaz!');
}).listen(3000);