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

// let openMenubtn = function () {
//   mainMore.style.display = "block";
// };

// openBtn.addEventListener("click", openMenubtn);

// let closeMenubtn = function () {
//   mainMore.style.display = "none";
// };

// closeBtn.addEventListener("click", closeMenubtn);

// let toogle = false;
// let toogleFunc = function () {
//   if (toogle) {
//     toogle = false;
//   } else {
//     toogle = true;
//   }
// };

// let toogleBtnFunc = function () {
//   toogleFunc();
//   toogleBtn.style.display = toogle ? "olive" : "red";
// };

// toogleBtn.addEventListener("click", toogleBtnFunc);
