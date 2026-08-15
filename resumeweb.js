// Carrusel 1 y 3 (mismo HTML reutilizado con .carousel)
document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  if (!slides.length) return;

  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  let currentSlideIndex = 0;

  function updateCarousel() {
    slides.forEach((slide, index) => {
      const isActive = index === currentSlideIndex;
      slide.classList.toggle('active', isActive);
      slide.style.opacity = isActive ? 1 : 0.4;
      slide.style.transform = isActive ? 'scale(1)' : 'scale(0.9)';
    });

    const slideWidth = slides[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
  }

  nextButton?.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      updateCarousel();
    }
  });

  prevButton?.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateCarousel();
    }
  });

  updateCarousel();
});

// Carrusel 2
document.querySelectorAll('.carousel2').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track2');
  if (!track) return;

  const slides = Array.from(track.children);
  if (!slides.length) return;

  const nextButton = carousel.querySelector('.next2');
  const prevButton = carousel.querySelector('.prev2');
  let currentSlideIndex = 0;

  function updateCarousel() {
    slides.forEach((slide, index) => {
      const isActive = index === currentSlideIndex;
      slide.classList.toggle('active', isActive);
      slide.style.opacity = isActive ? 1 : 0.4;
      slide.style.transform = isActive ? 'scale(1)' : 'scale(0.9)';
    });

    const slideWidth = slides[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
  }

  nextButton?.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      updateCarousel();
    }
  });

  prevButton?.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateCarousel();
    }
  });

  updateCarousel();
});

function copiarTexto() {
  const texto = "ezequiel.dt.01@gmail.com";
  navigator.clipboard.writeText(texto)
    .then(() => alert("Texto copiado al portapapeles"))
    .catch(err => console.error("Error al copiar: ", err));
}

const button = document.getElementById('toggle-theme');

button.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    button.textContent = '🌙';
  } else {
    button.textContent = '☀️';
  }
});


// Opcional: cuando carga la página, que el botón muestre el texto correcto
window.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('light-mode')) {
    button.textContent = '🌙';
  } else {
    button.textContent = '☀️';
  }
});
