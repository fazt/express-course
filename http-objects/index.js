const express = require('express');
const app = express();

const EVIL_IP = '192.168.1.1';

// express add new methods to request object
app.use((req, res, next) => {
  console.log(req.ip);
  if (req.ip === EVIL_IP) {
    res.status(401).send('Not Allowed');
  } else{
    next();
  }
});

// express adds new mehtods to resposne object
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/mydocument.txt`);
});

app.listen(3000, () => {
  console.log('server running on port 3000')
});
