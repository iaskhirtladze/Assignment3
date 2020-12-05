const MAX_TRY = 3;

const username = "coding";
const password = "coding123";

// Pascal Case
// PersonName

// kebab-case
// person-name

// snake_case
// person_name

// camelCase
// personName

// ==, ===

const stringTry = "3";
const person = "John";
// console.log(MAX_TRY === stringTry);
// console.log(typeof MAX_TRY, "==", typeof stringTry);

// console.log(MAX_TRY + 7);
// console.log(7 + stringTry + 10);
// const u1 = "user";
// const u2 = "USER";
// console.log(u1.toLowerCase() === u2.toLowerCase());

const responseUserName = prompt("Username: ");
// console.log(responseUserName);

// || , &&

if (responseUserName !== null && username === responseUserName.toLowerCase()) {
  const responsePassword = prompt("Password: ");

  if (password === responsePassword) {
    document.body.style.backgroundColor = "seagreen";
    alert("თქვენ წარმატებით გაიარეთ ავტორიზაცია.");
  } else {
    document.body.style.backgroundColor = "yellow";
    alert("პაროლი არ არის სწორი.");
  }
} else {
  document.body.style.backgroundColor = "tomato";
  alert("მომხმარებელი არ არის სწორი.");
}

// ||
// 0 + 0 = 0  false
// 1 + 0 = 1  true
// 0 + 1 = 1  true
// 1 + 1 = 1  true

// console.log(7 > 6 || 8 < 7);
// !||
// 0 + 0 = 1  true
// 1 + 0 = 0  false
// 0 + 1 = 0  false
// 1 + 1 = 0  false

// &&
// 0 * 0 = 0  false
// 1 * 0 = 0  false
// 0 * 1 = 0  false
// 1 * 1 = 1  true

// !&&
// 0 * 0 = 1  true
// 1 * 0 = 1  true
// 0 * 1 = 1  true
// 1 * 1 = 0  false

// >,<, <=, >=
// console.log(10 < 10);

// 0000 0001 = 1
// 0000 0011 = 3

console.log(4 & 1);
