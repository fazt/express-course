const express = require('express');
const path = require('path');
const http = require('http');

var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.end('Welcome to the homepage.');
});

app.get('/about', (req, res) => {
  res.end('Welcome to the About page.');
});

app.get('/weather', (req, res) => {
  res.end('The current weather is nice.');
});

// rather than defining a route for
// every single posible username you match all of them
app.get('/hello/:who', (req, res) => {
  res.end('Hello ' + req.params.who + '.');
  // This has some security issues
});

app.use(function (req, res) {
  // to tell the browser, that resoure not found
  res.statusCode = 404;
  res.end('404!');
});

http.createServer(app).listen(3000);
