const palavra = prompt('Digite a palavra!')
//Função para armazenar palavra invertida

function inverter(str) {
    if (!str) return 'String Inexixtente';
    let palavraInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        palavraInvertida += str[i];
    }
    return palavraInvertida;
}

let palavraInvertida = inverter(palavra);

if (palavra === palavraInvertida) {
    alert(`A palavra ${palavra} de tras pra frente fica ${palavraInvertida} então ela é um Palíndromo`);
} else {
    alert(`A palavra ${palavra} não é um Palíndromo`)
}
