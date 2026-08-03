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

// A calculator operation will consist of a number, an operator, and another number
let firstNumberPosition = " ";
let secondNumberPosition = " ";
let calculationOperator = " ";
let currentPosition = 1;

function updateDisplay(number, position, operator) {
    const calculatorDisplay = document. querySelector(".display");
    let outputText;

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
    console.log(calculatorDisplay.innerText);
};

const numberButtons = document.querySelectorAll(".number-btn");
for (let button of numberButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textNumberButton = target.innerText;

        updateDisplay(textNumberButton, currentPosition, calculationOperator);
    });
};

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let button of operatorButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textOperatorButton = target.innerText;
        
        if (firstNumberPosition !== " ") {
            calculationOperator = textOperatorButton;
            updateDisplay(0, 3, calculationOperator);

            currentPosition = 2;
        }
    });
};