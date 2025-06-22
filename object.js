// Objeto Math

let num = 9.12478154;

// Arredondar para cima
console.log(Math.ceil(num)); // 10

// Arredondar para baixo
console.log(Math.floor(num)); // 9

// Arredondar para o inteiro mais próximo
console.log(Math.round(num)); // 9

// Raiz quadrada
console.log(Math.sqrt(num)); // 3.018

// Potência
console.log(Math.pow(num, 2)); // 83.333

// Valor absoluto
console.log(Math.abs(-num)); // 9.12478154 -> significa que o número é positivo 
console.log(Math.abs(num)); // 9.12478154 -> significa que o número é positivo
// Mínimo e máximo
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5          
// Número aleatório
console.log(Math.random()); // 0.123456789 -> número aleatório entre 0 e 1
// Número aleatório entre 0 e 10
console.log(Math.floor(Math.random() * 11)); // 0 a 10

// Número aleatório entre 1 e 10
console.log(Math.floor(Math.random() * 10) + 1); // 1 a 10  

// Número aleatório entre 2 e 100
console.log(Math.floor(Math.random() * 100) + 2); // 2 a 100