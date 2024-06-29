function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num2 !== 0 ? num1 / num2 : 'LOL'; }
function power(num1, num2) { return Math.pow(num1, num2); }
function percentage(num) { return num / 100; }

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        case '^': return power(num1, num2);
        case '%': return percentage(num1);
        default: return null;
    }
}

let displayValue = '';
let firstNumber = '';
let operator = '';
let display = document.querySelector('.display');

document.querySelector('.btns').addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
        let value = target.value;

        if (['+', '-', '*', '/', '^', '%'].includes(value)) {
            if (value === '%') {
                if (displayValue) {
                    displayValue = percentage(parseFloat(displayValue)).toString();
                    display.innerText = displayValue;
                }
            } else {
                if (firstNumber && displayValue) {
                    firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(displayValue)).toString();
                } else {
                    firstNumber = displayValue;
                }
                operator = value;
                displayValue = '';
                display.innerText = value;
            }
        } else if (value === '=') {
            if (firstNumber && operator && displayValue) {
                displayValue = operate(operator, parseFloat(firstNumber), parseFloat(displayValue)).toString();
                display.innerText = displayValue;
                firstNumber = '';
                operator = '';
            }
        } else if (value === 'clear') {
            displayValue = '';
            firstNumber = '';
            operator = '';
            display.innerText = '';
        } else {
            displayValue += value;
            display.innerText = displayValue;
        }
    }
});
