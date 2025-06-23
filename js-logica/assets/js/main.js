function calcularIMC(event) {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    event.preventDefault();
    if (peso && altura) {
        let imc = peso / (altura * altura);
        document.getElementById("resultado").innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)}</p>`;
        if (imc < 18.5) {
            document.getElementById("descricao").innerHTML += `<p> - Abaixo do peso</p>`;
        } else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById("descricao").innerHTML += `<p>- Peso normal</p>`;
        } else if (imc >= 25 && imc < 29.9) {
            document.getElementById("descricao").innerHTML += `<p>- Sobrepeso</p>`;
        } else if (imc >= 30 && imc < 34.9) {
            document.getElementById("descricao").innerHTML += `<p>- Obesidade Grau 1</p>`;
        } else if (imc >= 35 && imc < 39.9) {
            document.getElementById("descricao").innerHTML += `<p>- Obesidade Grau 2</p>`;
        } else {
            document.getElementById("descricao").innerHTML += `<p>- Obesidade Grau 3</p>`;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
    }
    limparCampos();

}
document.getElementById("calcular").addEventListener("click", calcularIMC);
