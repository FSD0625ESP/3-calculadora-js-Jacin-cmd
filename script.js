const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button[data-value]");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";
let operator = null;
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      firstOperand = parseFloat(currentInput);
      operator = value;
      currentInput = "";
    } else {
      currentInput += value;
      updateScreen(currentInput);
    }
  });
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  operator = null;
  firstOperand = null;
  updateScreen("");
});

equalsBtn.addEventListener("click", () => {
  if (firstOperand === null || operator === null || currentInput === "") return;

  const secondOperand = parseFloat(currentInput);
  let result;
  switch (operator) {
    case "+":
      result = add(firstOperand, secondOperand);
      break;
    case "-":
      result = subtract(firstOperand, secondOperand);
      break;
    case "*":
      result = multiply(firstOperand, secondOperand);
      break;
    case "/":
      result = divide(firstOperand, secondOperand);
      break;
  }

  updateScreen(result);
  currentInput = result.toString();
  firstOperand = null;
  operator = null;
});

function updateScreen(value) {
  screen.value = value;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? "Error" : a / b;
}
