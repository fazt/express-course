const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

// every request goes trough this middleware
// and continues on if no files are foudn
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.end('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the about page');
});

app.get('/weather', (req, res) => {
  res.end('The Current weather is Nice');
});

// route get to the /fazt route
app.get('/fazt', (req, res) => {
  res.send('Welcome to the Fazt Page');
});

app.use((req, res) => {
  res.status(404).end('404!');
});

app.listen(3000);
