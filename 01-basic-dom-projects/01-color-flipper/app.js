// common
const color = document.querySelector("#color");
function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// simple color
const colors = ["red", "green", "blue", "yellow", "pink", "violet"];

const simpleBtn = document.querySelector("#simple-btn");

simpleBtn.addEventListener("click", function () {
  const randomColor = colors[getRandomIndex(colors.length)];

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

// hex color

const hex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const hexBtn = document.querySelector("#hex-btn");

hexBtn.addEventListener("click", () => {
  const randomHex = getRandomHex();
  console.log(randomHex);
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

function getRandomHex() {
  let hexVal = "#";
  for (let i = 0; i < 6; i++) {
    hexVal = hexVal + hex[getRandomIndex(hex.length)];
  }
  return hexVal;
}
