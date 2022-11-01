const {gets, print} = require('./aula-07-1-funcoes-auxiliares');

let maiorValorEncontrado = 0

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontrado) {
      maiorValorEncontrado = numerosSorteado
}

print(maiorValorEncontrado)
