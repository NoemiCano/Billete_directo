// #region ----------Hover Header----------

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;

    const menuLinks = document.querySelectorAll('.nav__text');

    menuLinks.forEach(link => {

        if (link.getAttribute('href') !== "" && currentPath.includes(link.getAttribute('href'))) {

            link.classList.add('active');
        }
        
        // Caso especial para la página de inicio (si la ruta es solo "/")
        if (currentPath === "/" && link.getAttribute('href') === "index_l.html") {
            link.classList.add('active');
        }
    });
});

// #endregion

// #region ----------Menú Hamburguesa----------

const menuIcon = document.getElementById('menu__icon');
const navMenu = document.querySelector('.header__nav');
const navButton = document.getElementById('menu__button');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav__text, .only-mobile').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show');
}));

// #endregion