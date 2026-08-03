"use strict";

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(dividend, divisor) {
    return dividend / divisor;
};

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "x":
            return multiply(firstNum, secondNum);
        case "÷":
            return divide(firstNum, secondNum);
    };
};

function getResult() {
    const result = operate(calculationOperator, +firstNumberPosition, +secondNumberPosition);

    reset();
    updateDisplay(result, currentPosition);
};

function reset() {
    firstNumberPosition = " ";
    secondNumberPosition = " ";
    calculationOperator = " ";
    currentPosition = 1;

    updateDisplay(firstNumberPosition, currentPosition);
};

// A calculator operation will consist of a number, an operator, and another number
let firstNumberPosition = " ";
let secondNumberPosition = " ";
let calculationOperator = " ";
let currentPosition = 1;

function updateDisplay(number, position) {
    const calculatorDisplay = document. querySelector(".display");

    if (position === 1) {
        if (firstNumberPosition === " ") {
            firstNumberPosition = number;
        } else {
            firstNumberPosition += number
        }
    }
    if (position === 2) {
        if (secondNumberPosition === " ") {
            secondNumberPosition = number;
        } else {
            secondNumberPosition += number
        }
    }

    calculatorDisplay.innerText = `${firstNumberPosition} ${calculationOperator} ${secondNumberPosition}`; 
};

const numberButtons = document.querySelectorAll(".number-btn");
for (let button of numberButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textNumberButton = target.innerText;

        updateDisplay(textNumberButton, currentPosition);
    });
};

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let button of operatorButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textOperatorButton = target.innerText;

        function getOperationUpdate(textOperator) {
            calculationOperator = textOperator;

            updateDisplay(0, 3);
            currentPosition = 2;
        };

        if (secondNumberPosition !== " ") {
            getResult();
            getOperationUpdate(textOperatorButton);
        };

        if (firstNumberPosition !== " ") {
            getOperationUpdate(textOperatorButton);
        };
    });
};

const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", (btn) => {
    if (secondNumberPosition !== " ") {
        getResult();
    }

});

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", (btn) => {
    reset();
})