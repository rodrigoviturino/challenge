// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const serve = http.createServer( (req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!');
// });

// serve.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);    
// })

const restify = require('restify');
const server = restify.createServer();

server.get('/teste', function(req, res, next) {
  res.send(`Hello`)
  return next();
});

server.listen(8080, function() {
  console.log(`Servidor iniciou`);
});