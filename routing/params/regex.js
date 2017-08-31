const express = require('express');
const app = express();

// to match /users/123, but no /users/fazt
app.get(/^\/users\/(\d+)$/, (req,res) => {
  var userId = parseInt(req.params[0], 10);
  res.send('User ID: ' + userId);
});

// to match similar to /users/100-500
app.get(/^\/users\/(\d+)-(\d+)$/, (req, res) => {
  var startId = parseInt(req.params[0], 10);
  var endId = parseInt(req.params[1], 10);

  res.send(startId + " - " + endId);
});

// to match UUIDs
// xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
var horribleRegexp = /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;

app.get(horribleRegexp, (req, res) => {
  var uuid = req.params[0];
});

app.listen(3000, () => {
  console.log(`server on port ${3000}`);
});
