// Slider de produtos
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.produto-slide');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    let currentSlide = 0;

    // Função para mostrar slide específico
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Função para próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Função para slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners para as setas
    if (leftArrow) {
        leftArrow.addEventListener('click', prevSlide);
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', nextSlide);
    }

    // Auto-play do slider (opcional)
    setInterval(nextSlide, 5000); // Muda slide a cada 5 segundos

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}); 