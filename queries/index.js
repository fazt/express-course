const express = require("express");
const app = express();

// google.com/search/?q=javascript books
// retuns an string
app.get("/search", (req, res) => {
  console.log(req.query.q);
  if (req.query.q === "javascript books") {
    res.send("List of javascript books");
  } else {
    res.send("Not found");
  }
});

// google.com/search?arg=javascript&arg=html
// retuns an array
app.get("/search-v2/", (req, res) => {
  console.log(req.query.arg);
  res.send("received");
});

app.listen(3000);
console.log("server on port ", 3000);
