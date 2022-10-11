// Propiedades de mobile menu

var propMenu = {

    burger_menu: document.querySelector('.menu-btn'),
    slideMenu: document.querySelector(".nav-links"),
    open_menu: false,
    elem_menu: document.querySelectorAll(".nav-links li")
}

var metMenu = {

    inicio: function() {

        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
        }

    },

    toggleMenu: function() {
        if (propMenu.open_menu == false) {

            propMenu.open_menu = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' open';

        } else {

            propMenu.open_menu = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('open', '');

        }
    },

    ocultarMenu: function() {
        propMenu.open_menu = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('open', '');
    }

}

metMenu.inicio();