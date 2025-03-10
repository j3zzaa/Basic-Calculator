let currentInput = '';
let currentOperation = '';
let previousInput = '';

//defines variables.

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`
}

//shows the number on the calculator "screen"

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
} 

//shows basic addition however when you click 4 + 1 it will show as 4 + 41.

    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`
}

//fixes the "issue". note: addition still doesnt work yet, only shows the "+" symbol. 

function calculate() {
    let result;
    const prev = parseFloat(previousInput)
    const current = parseFloat(currentInput)

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '/':
            result = prev / current;
            break;
        default;
            return
    }

    currentInput = result;
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = result;

}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sqrt(currentValue);
    }
}

document.getElementById('sqrt').addEventListener('click', appendSquareRoot);
    





