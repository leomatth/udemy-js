const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


function mostrarData() {
    const data = new Date();
    const dia = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate(); // adiciona o zero a esquerda se o dia for menor que 10;
    const mes = mesesDoAno[data.getMonth()]; // os meses começam do 0 até 11
    const ano = data.getFullYear();
    const hora = data.getHours()< 10 ? `0${data.getHours()}` : data.getHours();
    const min = data.getMinutes()< 10 ? `0${data.getMinutes()}` : data.getMinutes();;
    const seg = data.getSeconds()< 10 ? `0${data.getSeconds()}` : data.getSeconds();;
    const diaDaSemana = diasDaSemana[data.getDay()];
    

    const dataFormatada = `<p>Hoje é ${diaDaSemana}, do dia ${dia} de ${mes} de ${ano} e são ${hora}:${min}:${seg}.</p>`;
    const dataAtual = document.querySelector('.dataAtual');
    dataAtual.innerHTML = dataFormatada;
    
    return dataFormatada
}
mostrarData();

let intervalID = setInterval(mostrarData, 1000); // Atualiza a data a cada segundo


// caso queira usar uma atualização mais rápida, pode usar Intl.DateTimeFormat
/* function mostrarData() {
  const agora = new Date();
  
  const opcoes = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const dataFormatada = new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
  document.querySelector('.dataAtual').innerText = `Hoje é ${dataFormatada}`;
}

setInterval(mostrarData, 1000); */ 
