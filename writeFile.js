var fs = require('fs');

fs.writeFile('texto3.txt', 'Olá, mundo, de novo', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo');
});