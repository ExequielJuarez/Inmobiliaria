
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado
            event.preventDefault();

            // Obtén el destino del enlace
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calcula la posición del elemento más un ajuste adicional
                const headerOffset = 80; // Ajuste adicional en px
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Realiza el desplazamiento suave
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})
