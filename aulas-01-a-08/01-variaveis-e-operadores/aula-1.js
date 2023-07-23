const precoCombustivel = 5.79;
const kmPorLitros = 13;
const distanciaKm = 99;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));