// index y validacion de usuarios
"use strict"

localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBlZGllbnRlIjoiNzA3NTcxIiwiaWF0IjoxNTczNDkzNTMyfQ.MdlxEKYd4CRHHx7NR13-EQVIVJgO29fnKlpsM0Wr9dc"

//Cambios en el formulario de Login
let login = document.getElementById("contactForm");
login.addEventListener('submit', logMe)
//Registro inicial 
let register = document.getElementsByName("registro");
//register.addEventListener('change', cambioReg );

let invalid = document.querySelectorAll("#registro:invalid");
let valid = document.querySelectorAll("#registro :valid");
let btnSub = document.querySelector('[type=submit]');
let btnSubR = document.querySelector('.modal-footer .btn-primary');

let camposInv = document.querySelectorAll(".modal  input:invalid");

//camposInv.forEach(obj => {obj.style = "border-color: red"});
btnSubR.setAttribute('disabled','');

let camposval = document.querySelectorAll(".modal  input:valid");
camposval.forEach(obj => {obj.style = "border-color: none"});





//funciones del registro (2)

function cambioReg(event) {
    let camposInv = document.querySelectorAll(".modal  input:invalid");

    camposInv.forEach(obj => {obj.style = "border-color: red"});

    let camposval = document.querySelectorAll(".modal  input:valid");
    camposval.forEach(obj => {obj.style = "border-color: none"});
    
    
    
    //console.log('cambio algo');
   
     if (camposInv.length == 0) {
        btnSubR.removeAttribute('disabled');
        camposval.style = "border-color:none"
        
        
     } else {
        btnSubR.setAttribute('disabled',''); 

        
     }
       
    
       

   
}

function signin (event) {
    console.log('se envio esto');
    

    let GenerarHeader = {
        'x-auth': localStorage.token,
        'Content-Type': 'application/json'
    };

    let user = {
        nombre: document.getElementById('Nombre').value,
        correo: document.getElementById('emailR').value,
        direccion: document.getElementById('Address').value,
        ciudad: document.getElementById('ciudad').value,
        codigoPostal: document.getElementById('cp').value,
        password: document.getElementById('passwordR').value, 
        tipo: document.getElementById('UserTipo2').value
    }
    console.log(user);

    makeHTTPRequest('/api/login', 'POST', registerHeaders, user/*, cbOk, cbErr*/);

}


//Funciones del login

function logMe () {
    event.preventDefault() 
    let registerHeaders = {
        'x-auth': localStorage.token,
        'Content-Type': 'application/json'
    };
    let user = {
        correo: document.getElementById('emailLog').value,
        password: document.getElementById('pwLogin').value
    }

    window.open("./services.html");
    makeHTTPRequest('/api/login', 'POST', registerHeaders, user/*, cbOk, cbErr*/);

}