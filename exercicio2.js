function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    const pessoas = [];


    function recebeEventoForm (evento) {
        evento.preventDefault(); // Evita o envio do formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        form.reset(); // Limpa os campos do formulário
    }
    form.addEventListener('submit', recebeEventoForm);

/*  form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Formulário enviado');


} 
let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault(); // Evita o envio do formulário
        alert('Formulário enviado com sucesso!');
        console.log(`Form não enviado ${contador} vezes`);
        contador++;
        
    }

    form.addEventListener('submit', recebeEventoForm);        
*/
}

meuEscopo();