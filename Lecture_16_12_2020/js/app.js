// DOM is ready
// page is ready

window.onload = () => {
  // alert("window.onload");
};

document.addEventListener("DOMContentLoaded", domIsReady);

function domIsReady() {
  // alert("DOMContentLoaded");
}

function htmlEventhandler(title) {
  console.log(title);
}

const propButton = document.getElementById("propButton");

const obj = {
  onclick: null,
};

// obj.onclick = 10;
// console.log(obj.onclick);
// obj.onclick = 90;
// console.log(obj.onclick);

// propButton.onclick = (event) => {
//   console.log("property event 1");
// };

// propButton.onclick = handlePropButton;

function handlePropButton(event) {
  console.log("property event 2");

  propButton.removeEventListener("click", handlePropButton);
}

propButton.addEventListener("click", (event) => {
  console.log("property event 1");
});

propButton.addEventListener("click", handlePropButton);

// const redButton = document.getElementById("redButton");
// const greenButton = document.getElementById("greenButton");
// const blueButton = document.getElementById("blueButton");
// const brownButton = document.getElementById("brownButton");
// const ygButton = document.getElementById("ygButton");
const box = document.getElementById("box");

const div = document.createElement("div");
div.style.width = "400px";
div.style.height = "400px";
div.className = "super-duper";
div.addEventListener("click", dynamicHandler);
document.body.appendChild(div);

const handleColorChange = (event) => {
  //   console.log(event.target.getAttribute("id"));
  //   box.style.backgroundColor = event.target.textContent;
  div.style.backgroundColor = event.target.textContent;
  console.log(event.clientX);
  div.style.transform = `translateX(${event.clientX - 10}px)`;
  div.setAttribute("id", `id-${Math.floor(Math.random() * 100000000)}`);
};

// redButton.addEventListener("click", handleColorChange);
// greenButton.addEventListener("click", handleColorChange);
// blueButton.addEventListener("click", handleColorChange);
// brownButton.addEventListener("click", handleColorChange);
// ygButton.addEventListener("click", handleColorChange);

function dynamicHandler(event) {
  console.log("clicked dynamicHandler", event.target);
}

const btnColors = document.querySelectorAll(".colors");

btnColors.forEach((colorBtn) => {
  colorBtn.addEventListener("mouseover", handleColorChange);
});

// console.log(btnColors);

// modal
const openModalButton = document.querySelector(".open-modal");
openModalButton.addEventListener("click", (event) => {
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#close-modal");
  modal.classList.add("visible-modal");

  const closeHandler = (event) => {
    modal.classList.remove("visible-modal");

    closeModal.removeEventListener("click", closeHandler);
  };

  closeModal.addEventListener("click", closeHandler);
});
