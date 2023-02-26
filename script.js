"use script";

let openBtn = document.querySelector(".head__openbtn");
let closeBtn = document.querySelector(".close__btn");

let openButton = function () {
  openBtn.style.display = "block";
};
openBtn.addEventListener("click", openButton);

let closeButton = function () {
  openBtn.style.display = "none";
};
closeBtn.addEventListener("click", closeButton);
