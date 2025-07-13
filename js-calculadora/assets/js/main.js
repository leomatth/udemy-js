function Calculadora() {

  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };
  
  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.display.focus();
        this.realizaConta();
      }
    });
  }

  this.cliqueBotoes = e => {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) this.clearDisplay();
      if (el.classList.contains('btn-del')) this.delDisplay();
      if (el.classList.contains('btn-eq')) this.realizaConta();
      this.display.focus();
    });

  };

  this.addNumDisplay = el => this.display.value += el;

  this.clearDisplay = () => this.display.value = '';
  this.delDisplay = () => this.display.value = this.display.value.slice(0, -1);
  
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  }

}
const calculadora = new Calculadora();
calculadora.inicia();