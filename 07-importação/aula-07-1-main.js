const {gets, print} = require('./aula-07-1-funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}

let maiornumero = 0

for (var i = 0; i < numerosSorteados.length ; i++) {
  const numerosSorteado = numerosSorteados[i]
  if (numerosSorteado > maiorvalor) {
    maiorvalor = numerosSorteado;
  }
}

print(maiorvalor)
