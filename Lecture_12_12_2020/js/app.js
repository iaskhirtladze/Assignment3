// const salary = 7000;
// const age = 90;
// const firstName = "Bob";
// const lastName = "Smith";
// const email = "bob.smith@yopmail.com";

const salary_John = 7000;
const age_John = 90;
const firstName_John = "John";
const lastName_John = "Doe";
const email_John = "john.doe@yopmail.com";

// const userBob = [7000, 90, "Bob", "Smith", "bob.smith@yopmail.com"];

// const userJohn = [
//   salary_John,
//   age_John,
//   firstName_John,
//   lastName_John,
//   email_John,
// ];

// console.log(`${userBob[2]}'s email is ${userBob[userBob.length - 1]}`);
// console.log(userJohn);

// const bobObject = {
//   firstName: "Bob",
//   lastName: "Smith",
//   email: "bob.smith@yopmail.com",
//   age: 90,
//   salary: 7000,
// };

// const johnObject = {
//   firstName: firstName_John,
//   lastName: lastName_John,
//   email: email_John,
//   age: age_John,
//   salary: salary_John,
// };

// bobObject["age"] = 60;
// bobObject.age = 33535;
// console.log(bobObject);
// console.log(`${bobObject.firstName}'s email is ${bobObject.email}`);
// console.log(`${johnObject.firstName}'s email is ${johnObject.email}`);

const bobObject = createUser("Bob", "Smith", "bob.smith@yopmail.com", 90, 7000);
const johnObject = createUser(
  firstName_John,
  lastName_John,
  email_John,
  age_John,
  salary_John
);

// const alice = createUser("Alice", "Smith", "alice@yopmail.com", 21, 1000);
const alice = new User("Alice", "Smith", "alice@yopmail.com", 21, 1000);
const aliceCar = new Car("Audi", "A3", 2019);
// console.log(alice);
// Object.freeze(alice);
// alice.setAge(25);
// console.log(alice);

// console.log(aliceCar);

// alice.printInfo();
// aliceCar.printInfo();

// console.log(alice instanceof User);
// console.log(bobObject instanceof Object);
// console.log(johnObject);
// printEmail(bobObject);
// printEmail(johnObject);
// printEmail(alice);
// bobObject.printInfo();
// johnObject.printInfo();

function printEmail(user) {
  console.log(`${user.firstName}'s email is ${user.email}`);
}

function createUser(firstName, lastName, email, age, salary) {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    salary: salary,
    printInfo() {
      console.log("createUser printInfo method");
    },
  };
}

function User(firstName, lastName, email, age, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.salary = salary;
  this.printInfo = function () {
    console.log(this.firstName, this.lastName);
  };
  this.setAge = function (value) {
    this.age = value;
  };
}

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.printInfo = function () {
    console.log(`Brand-${this.brand}, Model-${this.model}, Year-${this.year}`);
  };
}

// DOM

// console.log(document.head);
// console.log(document.body);

const clickButton = document.getElementById("clickButton");
let updateText = "DOM Example";
let color = "yellowgreen";

clickButton.onclick = function () {
  if (clickButton.textContent !== updateText) {
    const temp = clickButton.textContent;
    clickButton.textContent = updateText;
    updateText = temp;

    const tempColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    color = tempColor;
  }
};
