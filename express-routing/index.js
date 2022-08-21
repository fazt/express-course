const express = require('express');

const app = express();

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
console.log('Server on port 3000');
