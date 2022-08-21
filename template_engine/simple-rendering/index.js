const express = require('express');
const path = require('path');

const app = express();

// using the ejs template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hey everyone, this is my webpage'
  });
});

app.listen(3000, () => console.log('server on port 3000'));
