const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Calculation description
function createAndWriteOutput(initialResult, operator, enteredNumber) {
    const calculationDescription = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calculationDescription);
}

// Calculation history log
function writeToLog(operationIdentifier, number, initialResult, currentResult) {
    const logEntry = {
        operatortion: operationIdentifier,
        enteredNumber: number,
        prevResult: initialResult,
        result: currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput(initialResult, '+', enteredNumber);
    writeToLog('ADD', enteredNumber, initialResult, currentResult);
}

function subtract() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput(initialResult, '-', enteredNumber);
    writeToLog('SUBTRACT', enteredNumber, initialResult, currentResult);
}

function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput(initialResult, '*', enteredNumber);
    writeToLog('MULTIPLY', enteredNumber, initialResult, currentResult);
}

function divide() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput(initialResult, '/', enteredNumber);
    writeToLog('DIVIDE', enteredNumber, initialResult, currentResult);
}

// EventListeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);