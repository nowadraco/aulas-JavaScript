const {gets, print} = require('./aula-07-1-funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}

print(numerosSorteados)