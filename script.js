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
let firstPositionNumber = 0;
let secondPositionNumber = 0;
let calculationOperator = "";