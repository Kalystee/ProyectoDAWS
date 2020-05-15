// index y validacion de usuarios
"use strict"

//window.localStorage = {token:""}

//Cambios en el formulario de Login
//Registro inicial
let register = document.getElementsByName("registro");
//register.addEventListener('change', cambioReg );

let invalid = document.querySelectorAll("#registro:invalid");

let valid = document.querySelectorAll("#registro :valid");
let btnReg = document.querySelector('.modal-footer .btn-primary');
btnReg.setAttribute('disabled','');
let btnSub = document.querySelector('[type=submit]');



let camposInv = document.querySelectorAll(".modal  input:invalid");

//camposInv.forEach(obj => {obj.style = "border-color: red"});


let camposval = document.querySelectorAll(".modal  input:valid");
camposval.forEach(obj => {obj.style = "border-color: none"});


//Request HTTP
async function makeHTTPRequest(endpoint,method,headers,body) {
    return await fetch("https://proyecto-dasw.herokuapp.com"/*"http://127.0.0.1:5000"*/+endpoint,{method:method,body:body,headers:headers})
        .then(response => {
            return response.json()
        })
}



//funciones del registro (2)

function cambioReg(event) {
    let camposInv = document.querySelectorAll(".modal  input:invalid");

    camposInv.forEach(obj => {obj.style = "border-color: red"});

    let camposval = document.querySelectorAll(".modal  input:valid");
    camposval.forEach(obj => {obj.style = "border-color: none"});

    console.log('cambio algo');

     if (camposInv.length == 0) {
        btnReg.removeAttribute('disabled');
        camposval.style = "border-color:none"
        
        
     } else {
        btnReg.setAttribute('disabled','');
     }
}

async function signin (event) {
    let registerHeaders = {
        'Content-Type': 'application/json'
    };

    let user = {
        name: document.getElementById('Nombre').value,
        email: document.getElementById('emailR').value,
        address: document.getElementById('Address').value,
        city: document.getElementById('ciudad').value,
        postalCode: document.getElementById('cp').value,
        password: document.getElementById('passwordR').value, 
        tipo: document.getElementById('UserTipo2').checked ? 1 : 0
    }
    let result = await makeHTTPRequest('/register', 'POST', registerHeaders,JSON.stringify(user));
    console.log(result)
}


//Funciones del login

async function logMe () {
    event.preventDefault();
    let registerHeaders = {
        'Content-Type': 'application/json'
    };
    let userEmail = document.getElementById('emailLog').value;
    let user = {
        email: userEmail,
        password: document.getElementById('pwLogin').value
    }

    let result = await makeHTTPRequest('/login', 'POST', registerHeaders, JSON.stringify(user));
    window.localStorage.setItem("token",result.token);
    window.localStorage.setItem("userEmail",userEmail);
    if(result.token){
        window.location = "services.html";
    }
}