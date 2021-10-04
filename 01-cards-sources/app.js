const slides = document.querySelectorAll('.slide');
console.log(slides);

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });
}

const clearActiveClasses = () => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
};
