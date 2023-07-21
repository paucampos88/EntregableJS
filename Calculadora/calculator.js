let currentNumber = '0';
let previousNumber = '';
let operation = null;
let resultShown = false;

function appendToScreen(value) {
  if (resultShown) {
    currentNumber = value;
    resultShown = false;
  } else {
    currentNumber = currentNumber === '0' ? value : currentNumber + value;
  }
  updateScreen();
}

function updateScreen() {
  const screen = document.getElementById('result');
  screen.textContent = currentNumber;
}

function clearScreen() {
  currentNumber = '0';
  previousNumber = '';
  operation = null;
  updateScreen();
}

function calculate() {
  if (operation && previousNumber) {
    switch (operation) {
      case '+':
        currentNumber = (parseFloat(previousNumber) + parseFloat(currentNumber)).toString();
        break;
      case '-':
        currentNumber = (parseFloat(previousNumber) - parseFloat(currentNumber)).toString();
        break;
      case '*':
        currentNumber = (parseFloat(previousNumber) * parseFloat(currentNumber)).toString();
        break;
      case '/':
        currentNumber = (parseFloat(previousNumber) / parseFloat(currentNumber)).toString();
        break;
    }
    operation = null;
    previousNumber = '';
    resultShown = true;
    updateScreen();
  }
}

function setOperation(op) {
  if (currentNumber !== '0') {
    operation = op;
    previousNumber = currentNumber;
    resultShown = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const operatorButtons = document.querySelectorAll('.calculator button:not(.screen)');
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === '=') {
        calculate();
      } else if (['+', '-', '*', '/'].includes(value)) {
        setOperation(value);
      } else {
        appendToScreen(value);
      }
    });
  });
});
