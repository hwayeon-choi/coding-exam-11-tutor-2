const http = require('http');

const server = http.createServer((req, res) => {
  const getMethod = req.method;
  switch (getMethod) {
    case 'GET':
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write("<h1>hello</h1>");
      res.end();
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