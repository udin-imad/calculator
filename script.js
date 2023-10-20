// Initialize Variable
let firstNum = '';
let secondNum = '';
let operator = null;

// DOM selection
const currentDisplay = document.querySelector('#current-display');
const latestDisplay = document.querySelector('#latest-display');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const pointButton = document.querySelector('#point');
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');

// Event Listeners
numberButton.forEach(button => {button.addEventListener('click', () => getDisplay(button.textContent))});
deleteButton.addEventListener('click', deleteDisplay);
pointButton.addEventListener('click', getPoint);
clearButton.addEventListener('click', clear);

// Event Handler
function getDisplay(number) {
  if (currentDisplay.textContent === '0') currentDisplay.textContent = '';
  currentDisplay.textContent += number;
};

function deleteDisplay() {
  if (currentDisplay.textContent === '0') return;
  if (currentDisplay.textContent.length === 1) return currentDisplay.textContent = '0';
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
};

function getPoint() {
  if (currentDisplay.textContent.includes('.')) return
  currentDisplay.textContent += pointButton.textContent
};

function clear() {
  firstNum = '';
  secondNum = '';
  operator = null
  currentDisplay.textContent = '0';
  latestDisplay.textContent = ''
};