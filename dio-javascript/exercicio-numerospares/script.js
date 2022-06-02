let lista = [1, 2, 3, 0, 4, 5, 6]
let lista2 = []

function verifica(list) {
    for(let i in lista) {
        if (lista[i] % 2 === 0 && lista[i] !== 0) {
            lista[i] = 0;
        } else if (list === '') {
            return -1;
        }
    }
    return lista;
}

alert(verifica(lista2));