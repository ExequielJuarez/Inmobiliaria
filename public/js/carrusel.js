document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los carruseles
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');
        let index = 0;

        function showSlide(n) {
            if (n >= slides.length) {
                index = 0;
            } else if (n < 0) {
                index = slides.length - 1;
            } else {
                index = n;
            }
            const offset = -index * 100;
            carousel.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
        }

        nextButton.addEventListener('click', () => {
            showSlide(index + 1);
        });

        prevButton.addEventListener('click', () => {
            showSlide(index - 1);
        });

        // Inicializa el carrusel
        showSlide(index);
    });
});
