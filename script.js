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