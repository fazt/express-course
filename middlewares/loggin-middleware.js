const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
  console.log('In comes a request' + req.method + ' to ', req.url);
  next();
});

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world');
});

// you can use app.listen for shorthand
http.createServer(app).listen(3000);
