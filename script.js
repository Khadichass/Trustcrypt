"use script";

const openBtn = document.getElementById("head__openbtn");
const closeBtn = document.getElementById("close__btn");

let openButton = function () {
  console.log("log");
  openBtn.style.display = "block";
};

openBtn.addEventListener("click", openButton);

let closeButton = function () {
  closeBtn.style.display = "none";
};
closeBtn.addEventListener("click", closeButton);
