const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const operation = document.getElementById("operation");
const clearButton = document.getElementById("clearButton");
const calculateButton = document.getElementById("calculateButton");

const rInfo = document.getElementById("rInfo");
const cInfo = document.getElementById("cInfo");

const resultDiv = document.getElementById("result");

clearButton.onclick = clearInputs;
calculateButton.onclick = calculate;
window.onkeyup = handleOnKeyUp;

function clearInputs() {
  input_1.value = null;
  input_2.value = null;
  resultDiv.textContent = null;
}

function calculate() {
  let result = null;
  let number_1 = parseInt(input_1.value);
  let number_2 = parseInt(input_2.value);

  if (input_1.value == "") {
    number_1 = 0;
  }
  if (input_2.value == "") {
    number_2 = 0;
  }

  switch (operation.value) {
    case "+":
      result = number_1 + number_2;
      break;
    case "-":
      result = number_1 - number_2;
      break;
    case "/":
      const divider = number_2 === 0 ? 1 : number_2;
      result = (number_1 / divider).toFixed(3);
      break;
    case "*":
      result = number_1 * number_2;
      break;
    case "%":
      result = number_1 % number_2;
      break;
    default:
      result = "unknown operation";
  }
  if (isNaN(result)) {
    resultDiv.textContent = null;
  } else {
    resultDiv.textContent = result;
  }
}

function handleOnKeyUp(event) {
  if (event.key === "r") {
    clearInputs();
    rInfo.style.color = "red";
    setTimeout(() => {
      rInfo.style.color = "black";
    }, 500);
  } else if (event.key === "c") {
    calculate();

    cInfo.style.color = "seagreen";
    setTimeout(() => {
      cInfo.style.color = "black";
    }, 500);
  }
}

// r
// c
