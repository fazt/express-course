const http = require('http');
const https = require('https');
const fs = require('fs');

const express = require('express');
const app = express();

//define app

const httpsOptions = {
  key: fs.readFileSync("path/to/private/key.pem"),
  cert: fs.readFileSync('path/to/certificate.pem')
};

http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(443);
