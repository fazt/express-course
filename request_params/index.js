const express = require("express");
const app = express();

app.get("/hello/:user", (req, res) => {
  res.end("Hello " + req.params.user + ".");
});

// sometimes we need to parse the params
app.get("/add/:userId", (req, res) => {
  let userId = parseInt(req.params.userId, 10);
  userId++;
  console.log(userId);
  res.send("Your user Id + 1 is: " + userId);
});

// params could be on any subroute
app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "fazt") {
    res.setHeader("nickname", req.params.username);
    return res.sendFile("./fazt-logo.jpg", { root: __dirname });
  }
  res.end("User not found");
});

// Regex to match /users/123, but no /users/fazt
app.get(/^\/id\/(\d+)$/, (req, res) => {
  let userId = parseInt(req.params[0], 10);
  res.json({
    "User ID": userId,
  });
});

// to match similar to /users/100-500
app.get(/^\/ids\/(\d+)-(\d+)$/, (req, res) => {
  let startId = parseInt(req.params[0], 10);
  let endId = parseInt(req.params[1], 10);

  res.json({
    startId,
    endId,
  });
});

// to match UUIDs
// xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
const horribleRegexp =
  /^\/uuid\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;

app.get(horribleRegexp, (req, res) => {
  console.log(req.params);
  const uuid = req.params[0];
  res.send("UUID: " + uuid);
});

app.listen(3000);
console.log("Server on port ", 3000);
