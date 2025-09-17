// --- Lógica do Menu Hambúrguer ---
const nav = document.getElementById('main-nav');
const hamburgerButton = document.getElementById('hamburger-button');

if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
        // Adiciona/Remove a classe 'is-open' na navegação e no botão
        nav.classList.toggle('is-open');
        hamburgerButton.classList.toggle('is-open');
    });
}