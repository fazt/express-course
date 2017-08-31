const express = require('express');
const api = express.Router();

const ALLOWED_IPS = [
  "127.0.0.1"
];

api.use((req, res, next) => {
  var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
  if (!userIsAllowed) {
    res.status(401).send('Not authorized');
  } else {
    next();
  }
});

app.get('/users', (req, res) => res.send('users'));
app.post('/user', (req, res) => res.send('user POST'));

app.get('/messages', (req, res) => res.send('messages'));
app.post('/message', (req, res) => res.send('message POST'));

module.exports = api;
