// const counter = document.querySelector("#counter");

// const increaseBtn = document.querySelector("#increase");
// const decreaseBtn = document.querySelector("#decrease");
// const resetBtn = document.querySelector("#reset");

// increaseBtn.addEventListener("click", function () {
//   const newVal = parseInt(counter.textContent) + 1;
//   counter.textContent = newVal;
//   setCounterColor(newVal);
// });

// decreaseBtn.addEventListener("click", function () {
//   const newVal = parseInt(counter.textContent) - 1;
//   counter.textContent = newVal;
//   setCounterColor(newVal);
// });

// resetBtn.addEventListener("click", function () {
//   counter.textContent = "0";
//   setCounterColor(0);
// });

// function setCounterColor(val) {
//   if (val > 0) {
//     counter.style.color = "green";
//   } else if (val < 0) {
//     counter.style.color = "red";
//   } else {
//     counter.style.color = "black";
//   }
// }

let counter = 0;
const counterEle = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id == "decrease") counter--;
    else if (btn.id == "increase") counter++;
    else if (btn.id == "reset") counter = 0;

    if (counter > 0) counterEle.style.color = "green";
    else if (counter < 0) counterEle.style.color = "red";
    else counterEle.style.color = "black";
    counterEle.textContent = counter;
  });
});
