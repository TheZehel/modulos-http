const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('pagina.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(data);
        return res.end();
    })
}).listen(8000);

console.log('Servidor rodando em http://localhost:8000');