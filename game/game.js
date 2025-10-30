const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const resultMessage = document.getElementById('result-message');
const attemptsDisplay = document.getElementById('attempts');

let min = 1;
let max = 100;
let attempts = 0;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

function resetGame() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  resultMessage.textContent = "Make a guess!";
  guessInput.value = '';
}

checkBtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max) {
    resultMessage.textContent = `Please enter a number between ${min} and ${max}`;
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if(guess === randomNumber) {
    resultMessage.textContent = `🎉 Correct! The number was ${randomNumber}`;
  } else if(guess < randomNumber) {
    resultMessage.textContent = "⬆️ Too low!";
  } else {
    resultMessage.textContent = "⬇️ Too high!";
  }
});

resetBtn.addEventListener('click', resetGame);
