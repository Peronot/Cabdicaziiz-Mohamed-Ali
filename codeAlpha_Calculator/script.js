let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', function(event) {
  if (/[0-9+\-*/.%]/.test(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (event.key === 'Backspace') {
    deleteChar();
  } else if (event.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
