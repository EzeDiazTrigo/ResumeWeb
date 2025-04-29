// Función reutilizable para ambos carruseles - 
function updateCarousel(track, slides, currentIndex) {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
    slide.style.opacity = index === currentIndex ? 1 : 0.4;
    slide.style.transform = index === currentIndex ? 'scale(1)' : 'scale(0.9)';
  });

  const activeSlide = slides[currentIndex];
  const trackRect = track.getBoundingClientRect();
  const activeSlideRect = activeSlide.getBoundingClientRect();

  const containerWidth = track.parentElement.getBoundingClientRect().width;
  const trackLeft = trackRect.left;
  const activeSlideLeft = activeSlideRect.left;
  const offset = (containerWidth / 2) - (activeSlideLeft - trackLeft) - (activeSlide.offsetWidth / 2);

  track.style.transform = `translateX(${offset}px)`;
}

// ---------------------
// Carrusel 1
// ---------------------
const track1 = document.querySelector('.carousel-track');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('.next');
const prevButton1 = document.querySelector('.prev');
let currentSlideIndex1 = 0;

function updateCarousel1() {
  updateCarousel(track1, slides1, currentSlideIndex1);
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

// Inicializar carrusel 1
updateCarousel1();

// ---------------------
// Carrusel 2
// ---------------------
const track2 = document.querySelector('.carousel-track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.next2');
const prevButton2 = document.querySelector('.prev2');
let currentSlideIndex2 = 0;

function updateCarousel2() {
  updateCarousel(track2, slides2, currentSlideIndex2);
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

// Inicializar carrusel 2
updateCarousel2();
