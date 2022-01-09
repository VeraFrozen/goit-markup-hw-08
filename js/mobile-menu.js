(() => {
    const refs = {
    openMenuBtn: document.querySelector('.mob-open__button'),
    closeMenuBtn: document.querySelector('.mob-close__button'),
    menu: document.querySelector('.mob__menu'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    }
})();