const express = require('express');
const app = express();

// route get to the /fazt route
app.get('/fazt', (req, res) => {
  res.send('Welcome ');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000);
