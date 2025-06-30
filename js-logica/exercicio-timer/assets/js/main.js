const data = new Date(0, 0, 0); 
const horaAtual = document.getElementById('hora');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let timerInterval;
// Eventos para iniciar os botões
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
// Function to start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      data.setSeconds(data.getSeconds() + 1);
      horaAtual.textContent = formatTime(data);
    }, 1000);
  }
  let mudarCor = document.querySelector('.hora');
  mudarCor.style.color = 'green'; // Change the color of the timer text to green
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  let mudarCor = document.querySelector('.hora');
  mudarCor.style.color = 'red'; // Change the color of the timer text to red
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  data.setHours(0, 0, 0);
  horaAtual.textContent = formatTime(data);
  let mudarCor = document.querySelector('.hora');
  mudarCor.style.color = 'black'; // Change the color of the timer text back to blacks
}

// Function to format time as HH:MM:SS
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Initialize the timer display
horaAtual.textContent = formatTime(data);
// Add event listeners to buttons

timerInterval = null;
