
// Navbar shrink function
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

//  Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
    });
};

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});





















































































































//
    // funcion de reduccion y ajusta de barra de navegacion
//    var navbarShrink = function () {
//        const navbarCollapsible = document.body.querySelector('#mainNav');//selecciona el elementocon el id mainNav
//       if (!navbarCollapsible) { //verifica si el elemento existe
//            return;
//        }
//        if (window.scrollY === 0) {
 //          navbarCollapsible.classList.remove('navbar-shrink');
//        } else {//verifica si estamos en la parte superior de la pagina
//            navbarCollapsible.classList.add('navbar-shrink');//si estamos en la parte superior se eliminar navbar
//        }//si no estamos en la parte superior la barra reduce su tamaño

//    };

    // reducir barra 
//    navbarShrink();//llamamos a la funcion y ajustamos el tamaño de la barra al tamaño de la pagina

    // reducir barra de navegacion al desplazar la pagina
//document.addEventListener('scroll', navbarShrink);// cada vez que se desplaza la pagina se ejecuta la funcion

    //  actualizar enlace de la barra de navegacion, mostrar seccion en ventana del navegador
// const mainNav = document.body.querySelector('#mainNav');//selecciona el elemento mainNav
// if (mainNav) {
 //    new B.ScrollSpy(document.body, {//si existe inicializa el scrollspyde bootstrap en body, funcionalidad que actualiza automaticamente los enlaces de navegacion
 //          target: '#mainNav',//elemento de destino donde se actualiza en enlace
 //         rootMargin: '0px 0px -40%',//ajusta margen de scroolspy, actualizando la ventana
//       });
//    };

    //ocultar la barra de navegacion
 //   const navbarToggler = document.body.querySelector('.navbar-toggler');//mostrar y ocultar barra de navegacion en pantallas pequeñas
 //   const responsiveNavItems = [].slice.call(
 //       document.querySelectorAll('#navbarResponsive .nav-link')//selecciona todos los elementos del enlace navbar y los convierte en una matriz
//    );
//    responsiveNavItems.map(function (responsiveNavItem) {//recorre cada elemento del enlace
 //       responsiveNavItem.addEventListener('click', () => {
//           if (Window.getComputedStyle(navbarToggler).display !== 'none') {//comprueba si el elemento navbar es visible
//                navbarToggler.click();//un clic para ocultar el elemento si es visible
 //           }
//        });
//    });

