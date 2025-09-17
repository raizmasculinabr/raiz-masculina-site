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