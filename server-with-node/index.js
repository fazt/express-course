const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const read = fs.createReadStream(__dirname + '/index.html');
  read.pipe(res);
}) .listen(3000, () => {
  console.log(`server on port ${3000}`);
});
