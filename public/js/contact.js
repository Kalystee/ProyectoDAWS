// index y validacion de usuarios
"use strict"

//Cambios en el formulario

let reg = document.getElementsByName("contactForm");
reg.addEventListener('change', cambioReg(event) );
reg.addEventListener('submit', signin );

/*function cambioReg(event) {
    console.log('cambio algo');
}*/

function signin (event) {
    console.log('se envio esto');
}
