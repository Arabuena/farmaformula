// Slider simples de produtos
const slides = document.querySelectorAll('.produto-slide');
const leftBtn = document.querySelector('.slider-arrow.left');
const rightBtn = document.querySelector('.slider-arrow.right');
let current = 0;
let autoSlideInterval;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
}

leftBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
});
rightBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
});

// Inicializa
showSlide(current);
startAutoSlide(); 