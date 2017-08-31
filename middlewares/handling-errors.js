const express = require('express');
const path = require('path');

const app = express();

var filePath = path.join(__dirname, 'jpg');
app.use((req, res) {
  res.sendFile(filePath, (err) => {
    if (err) {
      next(new Error('Error sending File!'));
    } else {
      console.log('file sent!');
    }
  });
});

// middleware that logs the error
// four parameter functions are called just in error mode
// express use the number of argument
// to determinate the type of middleware
app.use((err, req, res, next) => {
  console.log(err);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('server on port', 3000);
});
