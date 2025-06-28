let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
let botoes = document.getElementsByTagName('button');

for (let botao of botoes) {

    botao.addEventListener('click', function (event) {
        event.preventDefault();
        let num1 = Number(inputNum1.value);
        let num2 = Number(inputNum2.value);
        let resultado;
        let operador;

        switch (event.target.id) {
            case 'btnSomar':
                resultado = num1 + num2;
                operador = '+';
                break;
            case 'btnSubtrair':
                resultado = num1 - num2;
                operador = '-';
                break;
            case 'btnMultiplicar':
                resultado = num1 * num2;
                operador = '*';
                break;
            case 'btnDividir':
                if (num2 === 0) {
                    resultado = window.alert('Erro: divisão por zero');
                } else {
                    resultado = num1 / num2;
                    operador = '/';
                }
                break;
            case 'btnModulo':
                resultado = num1 % num2;
                operador = '%';
                break;

            default:
                console.error('Operação inválida');
                return;
        }
        mostrarResultado(resultado);
        mostrarOperador(operador);


    });
}


function limparCampos() {
    inputNum1.value = '';
    inputNum2.value = '';
    mostrarResultado('');
}

function mostrarOperador(operador) {
    let operadorDiv = document.getElementById('operador');
    operadorDiv.innerHTML = `<p>${operador}</p>`;

}


function mostrarResultado(resultado) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Resultado: ${resultado}</p>`;
}
console.log(resultado);
