"use script";

let openButton = document.querySelector(".button");

let openMenubtn = function () {
  openButton.style.display = "block";
};

openButton.addEventListener("click", openMenubtn);

let closeMenubtn = function () {
  openButton.style.display = "none";
};

closeBtn.addEventListener("click", closeMenubtn);
