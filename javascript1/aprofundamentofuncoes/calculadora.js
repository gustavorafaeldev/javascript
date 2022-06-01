function calculadora (){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+) \n 2 - Subtração (-) \n 3 - Divisão (/) \n 4 - Multiplicação (*) '));

    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida.')
        calculadora();
    } else {
        let n1 = Number(prompt('Digite o primeiro número: '));
        let n2 = Number(prompt('Digite o segundo número: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Valor inválido');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não'));
    
                if (opcao == 1){   
                    calculadora();
                } else if(opcao == 2) {
                    alert('Até logo');
                }
            }
        }

        switch (operacao) {
            case 1:
                soma();
            case 2:
                subtracao();
            case 3:
                divisao();
            case 4:
                multiplicacao();
        }
    }
}

calculadora();