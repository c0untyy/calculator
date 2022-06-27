class Calculator {
  constructor(lastResult, currentResult) {
    this.lastResult = lastResult;
    this.currentResult = currentResult;
    this.clearAll();
  }
  clearAll() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  clearSingle() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }

  displayNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
  updateDisplay() {
    this.currentResult.innerText = this.currentOperand;
    this.lastResult.innerText = this.previousOperand;
  }
}

const clearAllButton = document.getElementById("buttonDeleteAll");
let lastResult = document.getElementById("lastResult");
const clearNum = document.getElementById("buttonDelete");
let currentResult = document.getElementById("currentResult");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(lastResult, currentResult);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.displayNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

clearAllButton.addEventListener("click", (button) => {
  calculator.clearAll();
  calculator.updateDisplay();
});

clearNum.addEventListener("click", (button) => {
  calculator.clearSingle();
  calculator.updateDisplay();
});
