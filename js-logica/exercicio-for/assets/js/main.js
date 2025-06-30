/* const elementos = [
    { tag: 'p', texto: 'Frase 1' },           //0
    { tag: 'div', texto: 'Frase 2' },             //1
    { tag: 'footer', texto: 'Frase 3' },              //2
    { tag: 'section', texto: 'Frase 4' },                 //3
]

const container = document.getElementById('container');


for (let i = 0; i < elementos.length; i++) {
    container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
}



const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
    p.style.padding = '10px';
    p.style.marginBottom = '10px';
    p.style.fontSize = '1.2rem';
    p.style.borderRadius = '5px';
    p.style.fontFamily = 'Arial, sans-serif';
    p.style.textAlign = 'center';
}



// ESCREVER UMA FUNÇÃO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELE

function maiorNumero(x, y) {
   return x > y ? x : y;
}
console.log(maiorNumero(1,29));



function ePaisagem(largura, altura){
    if (largura > altura) {
        return true;

    }
}

const paisagem = (largura, altura) => largura > altura ? true : false;

console.log(paisagem(1920, 1080)); // true
console.log(paisagem(1080, 1920)); // false
*/

function numero(num){

    let min = 0;
    let max = 100;
    if (num < min || num > max) return 'Fora do intervalo';
    if (num === 0) return 'Zero';
    
    if (typeof num !== 'number') return NaN;
    
    if (num % 3 === 0 && num % 5 ===0){
        return 'FizzBuzz';
    } 
    if (num % 3 === 0){
        return 'Fizz';
    }
    if (num % 5 === 0){
        return 'Buzz';
    }
    if (num % 3 !== 0 && num % 5 !== 0){
        return num;
    }
    
};

console.log(numero(15));