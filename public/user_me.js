//user profile
'use strict'

document.body.onload = displayUser;

//donde vas a colocar el html
let usercard =document.getElementById("usercard");

//en donde se va a cargar el html que le determines 
    //let htmlString = innerHTML(val);
//el espacio en el front donde se va a visualizar
//usercard.innerHTML += htmlString;

//function loadPage(url) {
 //   url = url.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   // var regex = new RegExp("[\\?&]" + url + "=([^&#]*)"),
    //results = regex.exec(location.search);
    //return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//}

// le otorga al usuario
async function displayUser () {
    let headers = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token
        //Guillaume: Necesitamos solamente x-auth y content type
    };
    
    let allUsers = await makeHTTPRequest('/users/', 'GET', headers);

    if(allUsers.length > 0) {
                console.log("allUser",allUsers)
                // console.log(JSON.parse(xhr.response));
            // userToHTMLDetalle(JSON.parse(xhr.response)); Guillaume userToHTMLDetalle doesn't exists ?
            } else {
                alert('Error: '+allUsers.error);
            }

    let singleUser = await makeHTTPRequest('/users/'+window.localStorage.userEmail, 'GET', headers);
        if(singleUser.name) {
            console.log("singleUser",singleUser);
            // userToHTMLDetalle(JSON.parse(xhr.response)); Guillaume userToHTMLDetalle exists ?
            } else {
                alert('Error: ' + singleUser.error);
            }

}


//Guillaume : Porque no utilizas la misma que antes que funciona ? las errores vienian que makeHTTPRequestUsuarios
//Request HTTP
async function makeHTTPRequest(endpoint,method,headers) {
    return await fetch("https://proyecto-dasw.herokuapp.com"/*"http://127.0.0.1:5000"*/+endpoint,{method:method,headers:headers})
        .then(response => {
            return response.json()
        })
}

//Peticion de get al servidor

/*function makeHTTPRequestUsuarios(endpoint, method, headers, data, cb){
    // 1. crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. configurar: PUT actualizar archivo
    xhr.open(method,  URL + endpoint);
    // xhr.setRequestHeader('Content-Type', 'application/json');
      //xhr.setRequestHeader('x-auth', 'application/json');
    for(let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    // 4. Enviar solicitud
    xhr.send(JSON.stringify(data));
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = () => {
         console.log(xhr.response);
        cb(xhr);
    }
}*/

