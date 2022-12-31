var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('Servidor rodando.');
}).listen(8000);

console.log('Servidor rodando em http://localhost:8000/')