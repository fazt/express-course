const express = require('express');
const path = require('path');
const fs = require('fs');

// middlewares step
// 1. logging Request
// 2. process the request file
// 3. responde with 404 error

const app = express();

app.use((req, res, next) => {
  console.log('Request IP: ', req.url);
  console.log('Request date: ', new Date());
  next();
});

app.use((req, res, next) => {
  var filePath = path.join(__dirname, 'static', req.url);
  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) {// if the file exits
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('File not found');
});

app.listen(3000, () => console.log('server on port 3000'));
