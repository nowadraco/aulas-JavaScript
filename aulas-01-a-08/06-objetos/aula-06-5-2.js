let numero = 1

function multiplica() {
    for (var i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${i * numero}`)
    }
    
}

function multiplicador() {
    for (let i = 1; i <= 1; i++) {
        numero = numero + 1;
    }
}

function Trocar() {
    for (let i = 1; i <= 10; i++) {
        multiplica();
        multiplicador();
    }
}

Trocar();