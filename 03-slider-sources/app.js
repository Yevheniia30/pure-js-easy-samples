const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slideCount = mainSlide.querySelectorAll("div").length;
console.log(slideCount);

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlideIdx = 0;

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIdx += 1;
    if (activeSlideIdx === slideCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === "down") {
    activeSlideIdx -= 1;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slideCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
};

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});
