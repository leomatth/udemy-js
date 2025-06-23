/* const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const resultado = document.getElementById("resultado");

numeroTitulo.innerText = numero;

resultado.innerHTML = `
  <p>A raiz quadrada do seu número é: ${numero ** 0.5}</p>
  <p>O número é inteiro: ${Number.isInteger(numero)}</p>
  <p>O número é NaN: ${Number.isNaN(numero)}</p>
  <p>Arredondado para baixo: ${Math.floor(numero)}</p>
  <p>Arredondado para cima: ${Math.ceil(numero)}</p>
  <p>Com 3 casas decimais: ${numero.toFixed(3)}</p>
`;*/ 

const numero = Number(prompt("Digite um número: "));
document.getElementById("numero-titulo").innerText = numero;

document.getElementById("raiz").innerText = numero ** 0.5;
document.getElementById("inteiro").innerText = Number.isInteger(numero);
document.getElementById("nan").innerText = Number.isNaN(numero);
document.getElementById("baixo").innerText = Math.floor(numero);
document.getElementById("cima").innerText = Math.ceil(numero);
document.getElementById("casas").innerText = numero.toFixed(3);



