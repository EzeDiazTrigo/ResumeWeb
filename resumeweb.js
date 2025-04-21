// Carrusel 1
const track1 = document.querySelector('.carousel-track');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('.next');
const prevButton1 = document.querySelector('.prev');
let currentSlideIndex1 = 0;

function updateCarousel1() {
  slides1.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.style.opacity = index === currentSlideIndex1 ? 1 : 0.4;
    slide.style.transform = index === currentSlideIndex1 ? 'scale(1)' : 'scale(0.9)';
  });

  const slideWidth = slides1[0].getBoundingClientRect().width + 20;
  track1.style.transform = `translateX(-${currentSlideIndex1 * slideWidth}px)`;
}

nextButton1.addEventListener('click', () => {
  if (currentSlideIndex1 < slides1.length - 1) {
    currentSlideIndex1++;
    updateCarousel1();
  }
});

prevButton1.addEventListener('click', () => {
  if (currentSlideIndex1 > 0) {
    currentSlideIndex1--;
    updateCarousel1();
  }
});

updateCarousel1();


// Carrusel 2
const track2 = document.querySelector('.carousel-track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.next2');
const prevButton2 = document.querySelector('.prev2');
let currentSlideIndex2 = 0;

function updateCarousel2() {
  slides2.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.style.opacity = index === currentSlideIndex2 ? 1 : 0.4;
    slide.style.transform = index === currentSlideIndex2 ? 'scale(1)' : 'scale(0.9)';
  });

  const slideWidth = slides2[0].getBoundingClientRect().width + 20;
  track2.style.transform = `translateX(-${currentSlideIndex2 * slideWidth}px)`;
}

nextButton2.addEventListener('click', () => {
  if (currentSlideIndex2 < slides2.length - 1) {
    currentSlideIndex2++;
    updateCarousel2();
  }
});

prevButton2.addEventListener('click', () => {
  if (currentSlideIndex2 > 0) {
    currentSlideIndex2--;
    updateCarousel2();
  }
});

updateCarousel2();
