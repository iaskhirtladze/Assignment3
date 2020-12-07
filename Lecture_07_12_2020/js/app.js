function calc() {
  const number_1 = parseFloat(prompt("First Number: "));
  const number_2 = parseFloat(prompt("Second Number: "));

  if (!isNaN(number_1) && !isNaN(number_2)) {
    const operation = prompt("+,-,/,*,%");
    let message = "Result is - ";

    switch (operation) {
      case "+":
        message += add(number_1, number_2);
        break;
      case "-":
        message += subtract(number_1, number_2);
        break;
      case "/":
        message += divide(number_1, number_2);
        break;
      case "*":
        message += multiply(number_1, number_2);
        break;
      case "%":
        message += reminder(number_1, number_2);
        break;
      default:
        message = "Bad operation.";
    }

    customAlert(message);
  } else {
    customAlert("Bad number[s].");
  }
}

function customAlert(text) {
  //   alert(text);
  console.log(text);
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function divide(x, y) {
  return x / y;
}
function multiply(x, y) {
  return x * y;
}
function reminder(x, y) {
  return x % y;
}

//   if (operation === "+") {
//     alert(`Result is - ${number_1 + number_2}`);
//   } else if (operation === "-") {
//     alert(`Result is - ${number_1 - number_2}`);
//   } else if (operation === "/") {
//     alert(`Result is - ${number_1 / number_2}`);
//   } else if (operation === "*") {
//     alert(`Result is - ${number_1 * number_2}`);
//   } else if (operation === "%") {
//     alert(`Result is - ${number_1 % number_2}`);
//   } else {
//     alert("Bad operation.");
//   }

let global = "Global Scope";

function checkScope() {
  global = "Local Scope";
  console.log(global);
}
// checkScope();
// console.log(global);

let number = 10;
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// let count = 1;
// while (count <= number) {
//   console.log(count);

//   count = count + 1;
// }

for (let count = 0; count <= number; count++) {
  //   console.log(count);
}

const password = "1234";
const LIMIT = 5;

let tries = 1;
let correct = false;
while (LIMIT !== tries) {
  const input = prompt("Password");
  if (password === input) {
    correct = true;
    break;
  }

  tries++;
}

if (correct) {
  customAlert("Okay");
} else {
  customAlert("Limit case");
}
