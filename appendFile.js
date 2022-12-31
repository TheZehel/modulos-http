const fs = require('fs');

fs.appendFile('texto1.txt', 'Olá, mundo, agora atualizado!', function (err) {
  if (err) throw err;
  console.log('Arquivo salvo.');
});