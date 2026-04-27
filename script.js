document.addEventListener("DOMContentLoaded", function() {
    // 1. Obtenemos la ruta de la página actual (ej: /destinos.html)
    const currentPath = window.location.pathname;

    // 2. Seleccionamos todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav__text');

    menuLinks.forEach(link => {
        // 3. Si el "href" del enlace está incluido en la URL actual...
        if (link.getAttribute('href') !== "" && currentPath.includes(link.getAttribute('href'))) {
            // 4. ...le añadimos la clase que pone el borde fijo
            link.classList.add('active');
        }
        
        // Caso especial para la página de inicio (si la ruta es solo "/")
        if (currentPath === "/" && link.getAttribute('href') === "index_l.html") {
            link.classList.add('active');
        }
    });
});