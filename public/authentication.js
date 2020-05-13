// index y validacion de usuarios
"use strict"

//Guillaume: Initialisacion del localStorage
window.localStorage.token = "";
window.localStorage.userEmail = "";

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

        if (user.tipo==1) {
            window.location = "blog-single.html"

        } else {
            window.location = "myprofile.html"
        }

        //console.log(user)
    } else {
        alert("Hubo un error con tu registro verifica tus datos");
    }

}

//Funciones del login

async function logMe () {
    event.preventDefault();
    //Guillaume : No need x-auth for register and login
    let registerHeaders = {
        'Content-Type': 'application/json',
    };
    let user = {
        email: document.getElementById('emailLog').value,
        password: document.getElementById('pwLogin').value
    }
    //const url = 'https://proyecto-dasw.herokuapp.com/login'
    //aqui falla duno why
    //let result = await makeHTTPRequest(url, 'PUSH', registerHeaders, JSON.stringify(user));

    let result = await makeHTTPRequest('/login', 'POST', registerHeaders,JSON.stringify(user)); //Guillaume : Return el correo y el token

    //Guillaume : Queremos el token Y el userEmail en el localStorage
    window.localStorage.token = result.token;
    window.localStorage.userEmail = result.email;

    //Guillaume: Si no hay un result.token entonces hacer un alert con la error y hacer la redireccion
    if(result.token){
        alert('Se ha creado token de usuario');
        window.location = "myprofile.html"
      
    }else{
        if(result.error){
            alert(result.error)
        }else{
            alert("Internal Error");
        }
    }

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