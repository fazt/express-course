const express = require("express");

const app = express();

app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.send("Successful Login");
});

app.listen(3000);
console.log("Server on port 3000");
