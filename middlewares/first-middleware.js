const express = require('express');
const http = require('http');

// app is just other handler function
// as we could have in node
const app = express();

// can finish with a respones or continue with next
app.use(function (req, res) {
  console.log('In comes a request to ', req.url);
  res.end('Hello World')
});

// you can use app.listen for shorthand
http.createServer(app).listen(3000);
