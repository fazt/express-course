const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
  console.log('In comes a request' + req.method + ' to ', req.url);
  next();
});

app.use((req, res, next) => {
  var minute = (new Date()).getMinutes();
  if((minute % 2) === 0) {
    next();
  } else {
    res.statusCode = 403;// not authrized
    res.end('Not authorized');
  }
});

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Secret info: the password is "express"');
});

// you can use app.listen for shorthand
http.createServer(app).listen(3000);
