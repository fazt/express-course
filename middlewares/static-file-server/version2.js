const express = require('express');
const path = require('path');
const fs = require('fs');

const morgan = require('morgan');


const app = express();

// middlewares step
// 1. logging Request
app.use(morgan('short'));

// 2. process the request file
const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

// 3. responde with 404 error


app.listen(3000, () => console.log('server on port 3000'));
