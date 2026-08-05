"use strict";

const Calculator = {
    add: (firstAddend, secondAddend) => {
        return firstAddend + secondAddend;
    },

    subtract: (minuend, subtrahend) => {
        return minuend - subtrahend;
    },

    multiply: (firstFactor, secondFactor) => {
        return firstFactor * secondFactor;
    },

    divide: (dividend, divisor) => {
        return dividend / divisor;
    },

    operate: (operator, firstNum, secondNum) => {
        switch (operator) {
            case "+":
                return Calculator.add(firstNum, secondNum);
            case "−":
                return Calculator.subtract(firstNum, secondNum);
            case "×":
                return Calculator.multiply(firstNum, secondNum);
            case "÷":
                return Calculator.divide(firstNum, secondNum);
        };
    },

    isResult: false,
};

const Display = {
    update: (number, position) => {
        if (position === 1) {
            if (Display.firstPosition === " " || Calculator.isResult) {
                Display.firstPosition = number;
                Calculator.isResult = false;
            } else {
                Display.firstPosition += number;
            }
        }
        if (position === 2) {
            if (Display.secondPosition === " ") {
                Display.secondPosition = number;
            } else {
                Display.secondPosition += number;
            }
        }
        if (position === 3) {
            Display.firstPosition = number;
            Display.currentPosition = 1;
            Calculator.isResult = true;
        }

        calculatorDisplay.innerText = `${Display.firstPosition} ${Display.expressionOperator} ${Display.secondPosition}`; 
    },

    reset: () => {
        [Display.firstPosition, Display.secondPosition, Display.expressionOperator] = [" ", " ", " "]
        Display.currentPosition = 1;        
        Display.update(Display.firstPosition, Display.currentPosition);
    },

    getResult: () => {
        let firstNumber = +Display.firstPosition;
        let secondNumber = +Display.secondPosition;
        
        let result = Calculator.operate(Display.expressionOperator, firstNumber, secondNumber);

        if (Number.isNaN(result)) {
            alert("Operation Invalid");
            Display.reset();
            return;
        }
        if (!Number.isInteger(result)) {
            const strResult = String(result);
            if ((strResult.slice(strResult.split("").findIndex((e) => e === ".")).length - 1) > 6) {
                result = result.toFixed(6);
            }
        };

        Display.reset();
        Display.currentPosition = 3;
        Display.update(result, Display.currentPosition);
    },

    // A calculator operation will consist of a number, an operator, and another number
    firstPosition: " ",
    secondPosition: " ",
    currentPosition: 1,
    expressionOperator: " ",

}

const calculatorDisplay = document. querySelector(".display");

const numberButtons = document.querySelectorAll(".number-btn");
for (let button of numberButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textNumberButton = target.innerText;

        if (calculatorDisplay.innerText.length > 8) {
            return;
        } else {
            Display.update(textNumberButton, Display.currentPosition);
        };
    });
};

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let button of operatorButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textOperatorButton = target.innerText;

        function updateOperation(textOperator) {
            Display.expressionOperator = textOperator;

            Display.update(0, 4);
            Display.currentPosition = 2;
        };

        if (Display.secondPosition !== " ") {
            Display.getResult();
            updateOperation(textOperatorButton);
        };

        if (Display.firstPosition !== " ") {
            updateOperation(textOperatorButton);
        };
    });
};

const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", (btn) => {
    if (Display.secondPosition !== " ") {
        Display.getResult();
    };
});

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", (btn) => {
    Display.reset();
});