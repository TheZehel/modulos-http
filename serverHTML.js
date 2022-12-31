var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end('<h1>Testando o servidor</h1><p>Servidor rodando e abrindo esta página.</p>');
}).listen(8000);

console.log('Servidor rodando em http://localhost:8000/');