function numeros(n1, n2) {
    let igual;
    let soma;
    const somar = n1 + n2;

    if (n1 === n2) {
        igual = ('são iguais');
    } else {
        igual = ('não são iguais')
    }

    if (n1 + n2 < 10) {
        soma = (`${n1} + ${n2} é ${somar} que é menor do que 10`);
    } else if (n1 + n2 < 20){
        soma = (`${n1} + ${n2} é ${somar} que é maior do que 10`)
    }

    resposta = (`Os números ${n1} e ${n2} ${igual} \n ${soma}`)
    alert(resposta);
}

numeros(5, 5);