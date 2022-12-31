const fs = require('fs');
 
fs.open('texto2.txt', 'w', function (err, file) {
 if (err) throw err;
 console.log('Arquivo salvo.');
});