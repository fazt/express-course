const express = require("express");
const app = express();

// can finish with a respones or continue with next
app.use((req, res) => {
  console.log("In comes a request to ", req.url);
  res.end("Request Received");
});

app.get("/", (req, res) => res.send("home page"));

app.get("/about", (req, res) => res.send("about page"));

// you can use app.listen for shorthand
app.listen(3000);
console.log("server on port", 3000);
