document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const banner = document.querySelector('.banner');

    const updateParallax = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        root.style.setProperty('--title-parallax', `${scrollY * 0.12}px`);

        if (banner) {
            banner.style.setProperty('--bg-parallax', `${scrollY * 0.22}px`);
        }
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
});
