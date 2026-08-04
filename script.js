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
            case "-":
                return Calculator.subtract(firstNum, secondNum);
            case "x":
                return Calculator.multiply(firstNum, secondNum);
            case "÷":
                return Calculator.divide(firstNum, secondNum);
        };
    },
};

const Display = {
    update: (number, position) => {
        const calculatorDisplay = document. querySelector(".display");

        if (position === 1) {
            if (Display.firstPosition === " ") {
                Display.firstPosition = number;
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
        const result = Calculator.operate(Display.expressionOperator, firstNumber, secondNumber);

        Display.reset();
        Display.update(result, Display.currentPosition);
    },

    // A calculator operation will consist of a number, an operator, and another number
    firstPosition: " ",
    secondPosition: " ",
    currentPosition: 1,
    expressionOperator: " ",

}

const numberButtons = document.querySelectorAll(".number-btn");
for (let button of numberButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textNumberButton = target.innerText;

        Display.update(textNumberButton, Display.currentPosition);
    });
};

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let button of operatorButtons) {
    button.addEventListener("click", (btn) => {
        const target = event.target;
        const textOperatorButton = target.innerText;

        function updateOperation(textOperator) {
            Display.expressionOperator = textOperator;

            Display.update(0, 3);
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