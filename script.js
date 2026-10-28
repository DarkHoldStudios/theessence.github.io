document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFECTO REVEAL ON SCROLL COMPACTO (Aparecer elementos sutilmente)
    const itemsToReveal = document.querySelectorAll('.card-artistic, .merch-item, section h2, section p');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Añadimos una transición por CSS fluida mediante JS dinámico
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    itemsToReveal.forEach(item => {
        // Estado inicial oculto controlado por JS para que si no hay JS cargado, la web funcione igual.
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealOnScroll.observe(item);
    });

    // 2. EFECTO DE NAVEGACIÓN DINÁMICA (Header se esconde o resalta al bajar)
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            // Fondo sólido sutil al hacer scroll para lectura clara
            header.style.background = "rgba(0, 0, 0, 0.95)";
            header.style.borderBottom = "1px solid #111";
        } else {
            // Transparente en el inicio superior
            header.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))";
            header.style.borderBottom = "none";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});