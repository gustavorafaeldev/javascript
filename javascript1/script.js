let array = ['valor1', 'valor2', 'valor3', 'valor5', 'valor10'];
let objeto = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice, array[indice]);
}

for (let i in array) {
    console.log(array[i]);
}

for (i in objeto) {
    console.log(i, objeto[i])
}

for (i of array) {
    console.log(i);
}

for (i in objeto) {
    console.log(objeto[i]);
}

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}
