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
        'Content-Type': 'application/json',
        'x-Auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6YWFlQGF6ZS5mciIsImlhdCI6MTU4OTA4MTEwMSwiZXhwIjoxNTg5MDg4MzAxfQ.vr60yWehbfDPWR-7bu10dTI7K2wIcHfnMXr9wBBndFU'

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
    if (result !== undefined){
        alert("Registro exitoso");
        window.location = "services.html"
        //console.log(user)

        
    } else {
        alert("Hubo un error con tu registro verifica tus datos");
    }

}


//Funciones del login

async function logMe () {
    event.preventDefault();



    let registerHeaders = {
        'Content-Type': 'application/json',
        'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBlZGllbnRlIjoiNzMyNzU3IiwiaWF0IjoxNTg4OTc1ODQ2fQ.ZYXxDPvbsaC-FaJ-LNvcRpu1wavOMVnC92VwXk22oWg'

    };
    let user = {
        email: document.getElementById('emailLog').value,
        password: document.getElementById('pwLogin').value
    }

    const url = 'https://proyecto-dasw.herokuapp.com/login'
  
    //aqui falla duno why

    //let result = await makeHTTPRequest(url, 'PUSH', registerHeaders, JSON.stringify(user));

   

    //window.localStorage.setItem("token",result.token);

    localStorage.token_user = await fetch(url,{ method: 'POST', body: JSON.stringify(user),headers: {"Content-Type":"application/json", "x-Auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBlZGllbnRlIjoiNzMyNzU3IiwiaWF0IjoxNTg4OTc1ODQ2fQ.ZYXxDPvbsaC-FaJ-LNvcRpu1wavOMVnC92VwXk22oWg" }})
        .then(response => {
            
            return response.json();
            
        }).then(json => {
            
            return json.token;
        });

        
        // tengo que atrapar la respuesta del servidor 
        /*

    if(localStorage.token_user !== undefined){
        window.location.href = "./servicios.html";
       //console.log('login exitoso')
    }else{
        alert("Error !");
    }
    */

   
    
}