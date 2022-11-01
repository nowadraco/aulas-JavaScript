class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    
    
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDoPercurso(distanciaEmKm, precoCombustive){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustive
    }
}


const uno = new Carro ('uno', 'vermelho', 1/12) ;
const palio = new Carro ('palio', 'azul', 1/10 );


console.log(uno.calcularGastoDoPercurso(70, 5))
console.log(palio.calcularGastoDoPercurso(70, 5))