const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Verifica se os valores são válidos
    if (!peso || !altura) {
        setResultado("Por favor, preencha todos os campos corretamente.", 'imc-erro');
        return;
    }

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Abaixo do peso`, 'imc-abaixo');
    } else if (imc >= 18.5 && imc < 24.9) {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Peso normal`, 'imc-normal');
    } else if (imc >= 25 && imc < 29.9) {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Sobrepeso`, 'imc-sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 1`, 'imc-obesidade1');
    } else if (imc >= 35 && imc < 39.9) {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 2`, 'imc-obesidade2');
    } else {
        setResultado(`Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 3`, 'imc-obesidade3');
    }
});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, classe) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior
    const p = criaP();
    p.classList.add('paragrafo-resultado');
    if (classe) {
        p.classList.add(classe);
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
