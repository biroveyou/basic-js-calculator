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
        case "plus":
            return add(firstNum, secondNum);
        case "minus":
            return subtract(firstNum, secondNum);
        case "times":
            return multiply(firstNum, secondNum);
        case "divide":
            return divide(firstNum, secondNum);
    };
};

// A calculator operation will consist of a number, an operator, and another number
let firstNumberPosition = null;
let secondNumberPosition = null;
let calculationOperator = null;
let currentPosition = 1;

function updateDisplay(number, position, operator) {
    const calculatorDisplay = document. querySelector(".display");

    if (position === 1) {
        if (firstNumberPosition === null) {
            firstNumberPosition = number;
        } else {
            firstNumberPosition += number
        }
    }
    if (position === 2) {
        if (secondNumberPosition === null) {
            secondNumberPosition = number;
        } else {
            secondNumberPosition += number
        }
    }
    
    calculationOperator = operator;

    calculatorDisplay.innerText = firstNumberPosition, " ", calculationOperator, " ", secondNumberPosition; 
};

const numberButtons = document.querySelectorAll(".number-btn");
for (let button of numberButtons) {
    console.log(button);
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textNumberButton = target.innerText;

        updateDisplay(textNumberButton, currentPosition, calculationOperator);
    });
};