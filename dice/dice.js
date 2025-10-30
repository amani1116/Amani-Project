// Get DOM elements
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollBtn = document.getElementById('roll-btn');
const resetBtn = document.getElementById('reset-btn');
const resultMessage = document.getElementById('result-message');
const totalDisplay = document.getElementById('total');

// Global dice image links (6 faces)
const diceImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/120px-Dice-1-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-2-b.svg/120px-Dice-2-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/120px-Dice-3-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/120px-Dice-4-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/120px-Dice-5-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/120px-Dice-6-b.svg.png"
];

// Initialize total
let total = 0;

// Function to roll dice
function rollDice() {
  // Random values 0-5
  const diceValue1 = Math.floor(Math.random() * 6);
  const diceValue2 = Math.floor(Math.random() * 6);

  // Set dice images
  dice1.src = diceImages[diceValue1];
  dice2.src = diceImages[diceValue2];

  // Add roll animation class
  dice1.classList.add('animate-roll');
  dice2.classList.add('animate-roll');

  setTimeout(() => {
    dice1.classList.remove('animate-roll');
    dice2.classList.remove('animate-roll');
  }, 500);

  // Calculate total (add 1 because array index is 0-5)
  total = diceValue1 + 1 + diceValue2 + 1;
  totalDisplay.textContent = total;

  // Show message
  if(diceValue1 === diceValue2) {
    resultMessage.textContent = `🎉 Doubles! You rolled two ${diceValue1 + 1}'s!`;
  } else {
    resultMessage.textContent = `You rolled ${diceValue1 + 1} and ${diceValue2 + 1}.`;
  }
}

// Function to reset game
function resetGame() {
  dice1.src = diceImages[0];
  dice2.src = diceImages[0];
  total = 0;
  totalDisplay.textContent = total;
  resultMessage.textContent = 'Click "Roll Dice" to start!';
}

// Event listeners
rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetGame);
