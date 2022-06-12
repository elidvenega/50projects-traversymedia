// selectors
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

function imgSlider() {
  // click event to the right
  rightBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  });

  // click event to the left
  leftBtn.addEventListener("click", () => {
    activeSlide--;

    // logic behind code for arrows to work
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  });
}

imgSlider();
setBgToBody();

// full img on body
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// function that makes slider slide removes the class active
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
