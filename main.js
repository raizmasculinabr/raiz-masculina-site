// Arquivo: main.js
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const hamburgerButton = document.getElementById('hamburger-button');
    const overlay = document.getElementById('nav-overlay');

    if (hamburgerButton && nav && overlay) {
        hamburgerButton.addEventListener('click', () => {
            nav.classList.toggle('is-open');
            hamburgerButton.classList.toggle('is-open');
            overlay.classList.toggle('is-open');
        });

        // Fecha o menu se clicar no overlay
        overlay.addEventListener('click', () => {
            nav.classList.remove('is-open');
            hamburgerButton.classList.remove('is-open');
            overlay.classList.remove('is-open');
        });
    }
});
// --- Lógica da Animação de Scroll (Fade-in) ---

// Seleciona todas as seções que marcamos com a classe .fade-in-section
const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

// Configura o "observador"
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Se a seção entrou na tela (isIntersecting)
        if (entry.isIntersecting) {
            // Adiciona a classe 'is-visible' para ativar a animação do CSS
            entry.target.classList.add('is-visible');
            // Para de observar o elemento para a animação não repetir
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // A animação dispara quando 10% da seção estiver visível
});

// Pede ao observador para "vigiar" cada uma das nossas seções
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});