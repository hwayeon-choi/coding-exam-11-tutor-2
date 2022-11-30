const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const getMethod = req.method;
  switch (getMethod) {
    case 'GET':
      res.writeHead(200, {"Content-Type" : "text/html"});
      fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.end(data, 'utf-8');
      });
    break;
    case 'POST':
      console.log('hello post');
    break;
    default:
      console.log('hello error');
    break;
  }
});
server.listen(3333, (err) => {
  if(err) throw err;
});