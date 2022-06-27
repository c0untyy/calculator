let clearAllButton = document.getElementById("buttonDeleteAll");
let lastResult = document.getElementById("lastResult");
let clearNum = document.getElementById("buttonDelete");
let currentResult = document.getElementById("currentResult");

clearAllButton.addEventListener("click", () => {
  document.querySelector("#lastResult").textContent = "";
  document.querySelector("#currentResult").textContent = "";
});
clearNum.addEventListener("click", deleteNum);

function deleteNum() {
  currentResult.textContent = currentResult.textContent.slice(0, -1);
}

//Calculator functions
function add(a, b) {
  result = a + b;
  return result;
}

function sub(a, b) {
  result = a - b;
  return result;
}

function multiply(a, b) {
  result = a * b;
  return result;
}

function divide(a, b) {
  result = a / b;
  return result;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      sub(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}
