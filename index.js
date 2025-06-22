const nome = 'Leonardo';
const sobrenome = 'Pereira';
const idade = 29;
const peso = 69;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, seu IMC é ${imc.toFixed(2)} e nasceu em ${anoNascimento}.`);
