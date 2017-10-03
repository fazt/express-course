const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.locals.appName = 'Song Lyrics';

// settings
app.set('view engine', 'jade')
app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', ejs.renderFile);

// middlewares
app.use('/about', (req, res) => {
  res.render('about', {
    currentUser: 'fazt'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.use((req, res) => {
  res.status = 404;
  res.render('404.html', {
    urlAttemtd: req.url
  })
});

app.listen(3000, () => {
  console.log('server on port 3000');
});
