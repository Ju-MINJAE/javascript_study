'use strict';

const screen = document.querySelector('.screen');
const buttons = document.querySelector('.btn_container');
let currentNum = '0';
let prevNum = null;
let operator = null;
let calculated = false;

function updateScreen() {
  screen.textContent = currentNum;

  if (currentNum.length > 12) {
    screen.style.fontSize = '30px';
  } else if (currentNum.length > 8) {
    screen.style.fontSize = '40px';
  } else {
    screen.style.fontSize = '';
  }
}

function resetOperatorButtonStyles() {
  const operatorButtons = document.querySelectorAll('.operators');
  operatorButtons.forEach((button) => {
    button.style.backgroundColor = '';
    button.style.color = '';
  });
}

function handleNumberClick(number) {
  if (calculated || currentNum === '0') {
    currentNum = number;
    calculated = false;
  } else if (number === '+/-') {
    currentNum = (parseFloat(currentNum) * -1).toString();
  } else {
    currentNum += number;
  }
  resetOperatorButtonStyles();
  updateScreen();
}

function handleOperatorClick(newOperator) {
  if (operator !== null && prevNum !== null) {
    currentNum = performCalculation().toString();
    updateScreen();
  }

  if (newOperator === '=') {
    operator = null;
    prevNum = null;
    calculated = true;
  } else {
    operator = newOperator;
    prevNum = currentNum;
    currentNum = '0';
    calculated = false;
  }

  resetOperatorButtonStyles();

  if (newOperator !== '=') {
    const selectedButton = document.querySelector(
      `.operators[data-operator="${newOperator}"]`
    );
    if (selectedButton) {
      selectedButton.style.backgroundColor = 'white';
      selectedButton.style.color = 'black';
    }
  }
}

function performCalculation() {
  const num1 = parseFloat(prevNum);
  const num2 = parseFloat(currentNum);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'X':
      return num1 * num2;
    case '÷':
      return num1 / num2;
    case '%':
      return num1 / 100;
    default:
      return currentNum;
  }
}

function handleEqualsClick() {
  if (operator !== null && prevNum !== null) {
    currentNum = performCalculation();
    operator = null;
    prevNum = null;
    calculated = true;
    updateScreen();
  }
}

function clearCalculator() {
  currentNum = '0';
  prevNum = null;
  operator = null;
  calculated = false;
  updateScreen();
}

buttons.addEventListener('click', (event) => {
  const clickedButton = event.target;
  const buttonValue = clickedButton.textContent;

  if (
    clickedButton.classList.contains('number') ||
    clickedButton.classList.contains('sign')
  ) {
    handleNumberClick(buttonValue);
  } else if (clickedButton.classList.contains('operators')) {
    handleOperatorClick(buttonValue);
  } else if (clickedButton.classList.contains('equals')) {
    handleEqualsClick();
  } else if (clickedButton.classList.contains('dot')) {
    handleNumberClick(buttonValue);
  } else if (clickedButton.classList.contains('clear_num')) {
    clearCalculator();
  }
});
