const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// using path resolve for crossplatoform path / \
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Looks like you didn't find a static file")
});

app.listen(3000, () => {
  console.log('server on port 3000');
});
