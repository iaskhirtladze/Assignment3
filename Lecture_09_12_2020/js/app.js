// UDP
// TCP

// const saySomething = function () {
//   console.log("saySomething FUNCTION executed");
// };

// const sayHi = () => {
//   console.log("sayHi FUNCTION executed");
// };

// sayHi();
// hello();
// saySomething();

// function hello() {
//   console.log("hello FUNCTION executed");
// }

const operation = "+";

const mul = (x, y) => x * y;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;

const execute = (x, y, action) => action(x, y);

const result = execute(10, 7, add);

// console.log(execute(10, 7, add));
// console.log(execute(10, 7, subtract));
// console.log(execute(10, 7, divide));
// console.log(execute(10, 7, mul));

const reminder = execute(10, 3, (a, b) => a % b);
// console.log("reminder", reminder);
// x = 10
// y = 3
// action = (a, b) => a % b
// closure

const number_1 = 1;
// const number_2 = 10;
// const number_3 = 4;
// const number_4 = 67;
// const number_5 = 100;
// const number_6 = 150;
// const number_7 = 130;

// let sum = add(number_1, number_2);
// sum = add(sum, number_3);
// sum = add(sum, number_4);
// sum = add(sum, number_5);
// sum = add(sum, number_6);
// sum = add(sum, number_7);
// console.log(sum);

const myNumbers = [1, 10, 4, 67, 100, 150, 100, 130, 400, 100, 567];
// console.log(typeof myNumbers);
// console.log(myNumbers.length);
// const index = 3;
// console.log(`myNumbers[3] - ${myNumbers[index]}`);
const myNumbersSumHistory = [];
// console.log(myNumbersSumHistory.length);
let total = 0;
for (let index = 0; index < myNumbers.length; index += 2) {
  //   console.log(`myNumbers[${index}] - ${myNumbers[index]}`);
  total += myNumbers[index];
  const newIndex = myNumbersSumHistory.push(total);
  //   console.log("newindex", newIndex);
}
// console.log(total);
// console.log(myNumbersSumHistory);

// const removed = myNumbers.pop();
// console.log("removed", removed);
// myNumbers.pop();
// myNumbers.pop();
// myNumbers.pop();

// console.log(myNumbers.lastIndexOf(100));
// if (myNumbers.indexOf(100) !== -1) {
//   console.log("includes 100");
// } else {
//   console.log("else includes 100");
// }

for (let value of myNumbersSumHistory) {
  console.log(value);
}

// const sumOfFirstAndLast = myNumbers[0] + myNumbers[myNumbers.length - 1];
// console.log(sumOfFirstAndLast);

// console.log(
//   add(add(add(add(number_1, number_2), number_3), number_4), number_5)
// );
