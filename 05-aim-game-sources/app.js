const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let time = 0;
let score = 0;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});
const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score += 1;
    e.target.remove();
    createRandomCircle();
  }
});

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createRandomCircle = () => {
  const circle = document.createElement("div");
  const size = getRandomInt(10, 60);
  const color =
    "rgb(" +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ")";
  console.log(color);
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomInt(0, width - size);
  const y = getRandomInt(0, height - size);
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.backgroundColor = `${color}`;
  board.append(circle);
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
};

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

const finishGame = () => {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span> </h1>`;
};
