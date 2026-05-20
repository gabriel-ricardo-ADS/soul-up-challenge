document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-toggle');

    menuButtons.forEach((menuButton) => {
        const menuId = menuButton.getAttribute('aria-controls');
        const menu = menuId ? document.getElementById(menuId) : document.querySelector('.main-menu, nav');

        if (!menu) return;

        const closeMenu = () => {
            menu.classList.remove('is-open');
            menuButton.classList.remove('is-active');
            document.body.classList.remove('menu-open');
            menuButton.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
            menu.classList.add('is-open');
            menuButton.classList.add('is-active');
            document.body.classList.add('menu-open');
            menuButton.setAttribute('aria-expanded', 'true');
        };

        const toggleMenu = (event) => {
            event.preventDefault();
            event.stopPropagation();
            menu.classList.contains('is-open') ? closeMenu() : openMenu();
        };

        menuButton.addEventListener('click', toggleMenu);
        menuButton.addEventListener('touchend', toggleMenu, { passive: false });

        menu.addEventListener('click', (event) => {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    });
});
