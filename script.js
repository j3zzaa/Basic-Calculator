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

//note to self: sqrt doesnt work. 





