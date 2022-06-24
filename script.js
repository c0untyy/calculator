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
