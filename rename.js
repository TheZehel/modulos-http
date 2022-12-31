const fs = require('fs');

fs.rename('texto1.txt', 'texto1_renomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo renomeado');
});