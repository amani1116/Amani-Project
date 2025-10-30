const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

// Update Display with animation
function updateDisplay() {
  countDisplay.textContent = count;
  countDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    countDisplay.style.transform = 'scale(1)';
  }, 150);
}

// Increment
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Decrement
decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

// Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
