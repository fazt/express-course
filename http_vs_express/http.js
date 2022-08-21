import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/html')
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const read = fs.createReadStream('./static/index.html');
  read.pipe(res);
})

server.listen(3000)
console.log(`server on port ${3000}`);
