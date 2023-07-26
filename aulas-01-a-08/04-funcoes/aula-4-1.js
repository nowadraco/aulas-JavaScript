function icrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros/ 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(icrementarJuros(100, 10));
console.log(icrementarJuros(100, 15));
console.log(icrementarJuros(100, 20));