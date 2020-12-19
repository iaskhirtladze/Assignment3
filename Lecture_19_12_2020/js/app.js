// DOM
// BOM
// CSSOM
// window.alert("Adadada")
// window.prompt("adad")

// TAB 1

// www.site1.com
// www.site2.com
// www.site3.com
const box = window.document.getElementById("box");

box.style.width = "200px";
box.style.height = "200px";
box.style.background = "red";

let count = 0;
setInterval(() => {
  //   console.log("Counter", count);
  box.style.backgroundColor = randomRGB();
  //   count++;
}, 1000);

const templString = `Counter ${count}`;
// console.log(templString);

const myTexts = [
  "HTML",
  "CSS",
  "HTML5",
  "CSS3",
  "Javacript 5.1",
  "javascript ES6",
];

const myTechs = [
  "HTML",
  "CSS",
  "HTML5",
  "CSS3",
  "Javacript 5.1",
  "javascript ES6",
];

function forEach(myArray, fn) {
  if (!fn) return;

  for (let i = 0; i < myArray.length; i++) {
    fn(myArray[i], i, myArray);
  }
}

// forEach(myTexts, (value) => {
//   console.log(`Tech - ${value}`);
// });

// forEach(myTechs, (value) => {
//   console.log(`Tech - ${value}`);
// });

console.log(myTechs.reverse().join(" "));
console.log(myTechs.reverse().join(" "));

// myTexts.forEach((value) => {
//   console.log("value", value);
//   console.log("index", index);
//   console.log("arr", arr);
//   console.log(`Tech - ${value}`);
// });

function randomRGB() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  //   return "rgb(" + r + "," + g + "," + b + ")";
  return `rgb(${r},${g},${b})`;
}

// bubbling,
// capturing

const contDiv = document.querySelector(".cont");
const paragraph = document.querySelector(".paragraph");
const button = document.querySelector("button");
const link = document.querySelector("#link");

contDiv.addEventListener(
  "click",
  (event) => {
    console.log("CONT DIV CLICK", event.currentTarget);
  },
  false
);

paragraph.addEventListener(
  "click",
  (event) => {
    console.log("P CLICK", event.currentTarget);
  },
  false
);

button.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("BUTTON CLICK");
  },
  false
);

document.addEventListener(
  "click",
  (event) => {
    console.log(
      "document CLICK",
      `event.phase - ${event.eventPhase}`,
      event.currentTarget
    );
  },
  false
);

box.addEventListener(
  "click",
  (event) => {
    console.log("COLORED BOX CLICK");
  },
  false
);

link.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(event.target.href);

  // Validation code
  location.replace(event.target.href);
});

// button => lis1| stopImmediatePropagation  !== lis2|lis3
// stopPropagation
// p -> lis1
