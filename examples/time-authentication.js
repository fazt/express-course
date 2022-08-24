const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In comes a request" + req.method + " to ", req.url);
  next();
});

app.use((req, res, next) => {
  let minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    next();
  } else {
    // res.statusCode = 403;// not authrized
    // res.end('Not authorized');
    res.status(403).end("Not authorized");
  }
});

app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Secret info: the password is "express"');
});

// you can use app.listen for shorthand
app.listen(3000);
console.log("Server on port 3000");
