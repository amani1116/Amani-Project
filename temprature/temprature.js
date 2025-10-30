// Select elements
const inputTemp = document.getElementById('input-temp');
const inputUnit = document.getElementById('input-unit');
const celsiusOutput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const kelvinOutput = document.getElementById('kelvin');
const convertBtn = document.getElementById('convert');

convertBtn.addEventListener('click', () => {
  const value = parseFloat(inputTemp.value);
  const unit = inputUnit.value;

  if (isNaN(value)) return alert("Please enter a valid number!");

  let celsius, fahrenheit, kelvin;

  // Conversion
  switch(unit) {
    case 'C':
      celsius = value;
      fahrenheit = (value * 9/5) + 32;
      kelvin = value + 273.15;
      break;
    case 'F':
      celsius = (value - 32) * 5/9;
      fahrenheit = value;
      kelvin = celsius + 273.15;
      break;
    case 'K':
      celsius = value - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = value;
      break;
  }

  // Update outputs with 2 decimal precision
  celsiusOutput.textContent = celsius.toFixed(2);
  fahrenheitOutput.textContent = fahrenheit.toFixed(2);
  kelvinOutput.textContent = kelvin.toFixed(2);
});
