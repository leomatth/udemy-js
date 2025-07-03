const textoTarefa = document.querySelector('.input-tarefa');
const btnAdicionar = document.querySelector('.add-tarefa');
const tabelaFazer = document.querySelector('.fazer');
const tabelaAndamento = document.querySelector('.andamento');
const tabelaConcluidas = document.querySelector('.concluidas');
const moverFazer = document.querySelector('.mover-fazer');
const moverAndamento = document.querySelector('.mover-andamento');
const moverConcluidas = document.querySelector('.mover-concluidas');
const btnExcluir = document.querySelector('.excluir-tarefa');
const contadorFazer = document.querySelector('.fazer-contagem');
const contadorAndamento = document.querySelector('.andamento-contagem');
const contadorConcluidas = document.querySelector('.concluidas-contagem');

function criaLi() {
    const li = document.createElement('li')
    return li;
};

function limparTarefa() {
    textoTarefa.value = '';
    textoTarefa.focus();
};

function criaTarefa(textoInput) {
    const li = criaLi();
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    const texto = document.createTextNode(' ' + textoInput);
    li.appendChild(texto)
    tabelaFazer.appendChild(li);
    limparTarefa();
    atualizarContadores();

};

textoTarefa.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!textoTarefa.value) return;
        criaTarefa(textoTarefa.value);
    }
});

btnAdicionar.addEventListener('click', function () {
    if (!textoTarefa.value) return;
    criaTarefa(textoTarefa.value);
    atualizarContadores();
});


btnExcluir.addEventListener('click', function () {
    // 1. Pegue todas as tarefas (li) dentro das 3 listas
    const tarefas = document.querySelectorAll('ul li');

    // 2. Para cada tarefa, verifique se o checkbox está marcado
    tarefas.forEach(function (li) {
        const checkbox = li.querySelector('input[type="checkbox"]');

        // 3. Se estiver marcado, remova a tarefa (li)
        if (checkbox && checkbox.checked) {
            li.remove();
        }
    });
    atualizarContadores();
});

moverAndamento.addEventListener('click', function () {
    const tarefas = document.querySelectorAll('ul li');
    console.log(tarefas);
    tarefas.forEach((li) => {
        const checkbox = li.querySelector('input[type=checkbox]');
        if (checkbox && checkbox.checked) {
            tabelaAndamento.appendChild(li);
            checkbox.checked = false;
        }
    })
    atualizarContadores();
});

moverFazer.addEventListener('click', function () {
    const tarefas = document.querySelectorAll('ul li');
    console.log(tarefas);
    tarefas.forEach((li) => {
        const checkbox = li.querySelector('input[type=checkbox]');
        if (checkbox && checkbox.checked) {
            tabelaFazer.appendChild(li);
            checkbox.checked = false;
        }
    })
    atualizarContadores();
});

moverConcluidas.addEventListener('click', function () {
    const tarefas = document.querySelectorAll('ul li');
    console.log(tarefas);
    tarefas.forEach((li) => {
        const checkbox = li.querySelector('input[type=checkbox]');
        if (checkbox && checkbox.checked) {
            tabelaConcluidas.appendChild(li);
            checkbox.checked = false;
        }
    })
    atualizarContadores();
});

function atualizarContadores() {
    contadorFazer.innerText = tabelaFazer.querySelectorAll('li').length
    contadorAndamento.innerText = tabelaAndamento.querySelectorAll('li').length
    contadorConcluidas.innerText = tabelaConcluidas.querySelectorAll('li').length
};