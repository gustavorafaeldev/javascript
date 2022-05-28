let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari'
];

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar: function () {
        console.log('VRUM VRUM');
    },
    acelerar: function () {
        console.log('Riiiiiiih');
    }
};

console.log('Modelo: '+carro.modelo);

carro.ligar();
carro.acelerar();