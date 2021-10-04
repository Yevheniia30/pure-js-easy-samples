const board = document.querySelector("#board");
const SQUARES_NUMBER = 5250;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const setColor = (element) => {
  element.style.backgroundColor =
    "rgb(" +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ")";
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
};
