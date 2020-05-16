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
    

    let singleUser = await makeHTTPRequest('/users/'+window.localStorage.userEmail, 'GET', headers);
        if(singleUser.name) {
            console.log("singleUser",singleUser);
            // userToHTMLDetalle(JSON.parse(xhr.response)); Guillaume userToHTMLDetalle exists ?
            userToHTML (singleUser);
            } else {
                alert('Error: ' + singleUser.error);
            }

    
}


function userToHTML (user) {

   // console.log("holi ");
    //console.log(user);
    //var valor = loadPage('value')
    let tipo = (user.tipo == 0) ? 'Prestador':'Cliente';
    let nombre = (user.name);    

    usercard.innerHTML =  `<div class="card mx-auto" style="width: 75%; margin-top: 4em; " id="usercard">
    <img src="https://wow.zamimg.com/uploads/screenshots/normal/449254-piedra-de-doge.jpg"  alt="No image found"  height="200" width="200" style=" margin-left: auto; margin-right: auto; margin-top: 2em;" >
<div class="card-body">
<h5 class="card-title">Bienvenido</h5>
<p class="card-text">${nombre}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Ciudad de origen: <a href="#">${user.city}</a></li>
<li class="list-group-item">Correo: <a href="#"> ${window.localStorage.userEmail}</a></li>
<li class="list-group-item">direccion: <a href="#">${user.address}</a></li>
<li class="list-group-item">tipo de perfil: <a href="#">${tipo} </a></li>
</ul>
<div class="card-body">
    <a href="#" class="btn btn-primary " id="btn_editar"  onclick="EditUser()" data-toggle="modal" data-target="#myModal"  >Editar</a>
    <a href="#" class="btn btn-primary" id="btn_borrar" onclick="DeleteUser() " >Borrar perfil</a>
    <button class="btn btn-primary" id="btn_services" onclick="getServicesByUser()" value='notprinted' >Mostrar Servicios</button>
    <div id="new">

    </div>
</div> 


<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form id="registro" >
                <div class="form-row">
                    
                    <div class="form-group col-md-12">
                        <label for="Nombre">Nombre</label>
                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre Completo" required>
                    </div>
                   
                </div>
                <div class="form-group">
                    <label for="Address">direccion</label>
                    <input type="text" class="form-control" id="Address" placeholder="1234 Main St" required>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="ciudad">Sexo (H, M) </label>
                        <input type="text" class="form-control" id="ciudad" required>
                    </div>

                    <div class="form-group col-md-2">
                        <label for="cp">Zip</label>
                        <input type="text" class="form-control" id="cp">
                    </div>
                </div>
                
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick= "EnviarCambios()">Save changes</button> </br>

        </div>
      </div>
    </div>
  </div>
    
    `

    


};


async function DeleteUser (event) {
    //alert("Borrar User")

    let response = await makeHTTPRequest('/users/'+window.localStorage.userEmail, {method:"DELETE",headers:{"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
        .then(response => {
            if(response.status == 200){
                console.log(response)
                window.location = 'contact.html';
                
                
            }else{
                
                console.log(response );
            }
        })
    
    }


    
async function EditUser () {
    let headers = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token,
        "x-user-token":window.localStorage.token_user
        
    };

  let userEdit =  await makeHTTPRequest('/users/'+window.localStorage.userEmail, 'GET', headers);
    if(userEdit.name) {
        //console.log(userEdit);
        // userToHTMLDetalle(JSON.parse(xhr.response)); Guillaume userToHTMLDetalle exists ?
         editionMenu (userEdit);
        } else {
            alert('Error: ' + userEdit.error);
        }
  

}



function editionMenu (userParam) {

   console.log(userParam);

   let user= userParam;

    document.querySelector('.modal input').value= user.name;
    document.querySelector ('form #Address').value= user.address;
    document.querySelector ('form #ciudad').value=user.city;
    document.querySelector ('form #cp').value=user.postalCode;

}

async function EnviarCambios(event) {
//event.preventDefault();

let user = {
    name: document.querySelector('.modal input').value,
    address: document.querySelector ('form #Address').value,
    city: document.querySelector ('form #ciudad').value,
    postalCode:document.querySelector ('form #cp').value

   
}



//btn_servs = document.getElementById("btn_services").onclick = getServicesByUser;

//document.getElementById("btn_services").addEventListener("click",getServicesByUser);







let response= await fetch('https://proyecto-dasw.herokuapp.com/users/'+window.localStorage.userEmail,{method:"PUT",body:JSON.stringify(user),headers:{"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
.then(response => {
    console.log(response);
    userToHTML(user);
    setTimeout(function () {
        $(".alert").remove();
    },3000);
});


}


async function getServicesByUser () 
{    //Pedir el string del servicio y relacionarlo con el usuario , ir a la tabla de servicios y tomar la fecha
    console.log ('servcesbyuser')
    
    
    let headers = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token,
        "x-user-token":window.localStorage.token_user
        
    };
    let response;
    response =  await makeHTTPRequest('/services/by-client/'+window.localStorage.userEmail, 'GET', headers);
        var elementbtn = document.getElementById('btn_services').value;

    if (response.length!==0) {
        if(elementbtn === 'notprinted'){

            
            for(let i = 0; i < response.length ; i++){
                var tag = document.createElement("label");
                var tag2= document.createElement("label");
                var tag3 = document.createElement("label");
                var tag5= document.createElement("button")
                var tag4 = document.createElement("br");

                tag.setAttribute("id","serv"+i);
                tag2.setAttribute("id","pers"+i);
                tag3.setAttribute("id","cat"+i);
                tag5.setAttribute("id","completado"+i )

                var text = document.createTextNode(response[i].name);
                var tpers = document.createTextNode(response[i].offererId);
                var tcat = document.createTextNode(response[i].categoryId);
                var tborrar = document.createTextNode("Completado");

                tag.appendChild(text);
                tag2.appendChild(tpers);
                tag3.appendChild(tcat);
                tag5.appendChild(tborrar);

                var element = document.getElementById("new");
                element.appendChild(tag);
                element.innerHTML+='&nbsp; &nbsp;'
                element.appendChild(tag2);
                element.innerHTML+='&nbsp; &nbsp;'
                element.appendChild(tag3);
                element.innerHTML+='&nbsp; &nbsp;'
                element.appendChild(tag5)
                element.appendChild(tag4);
            }
            document.getElementById('btn_services').value = "printed";
            document.getElementById('btn_services').innerText = "Esconder Servicios";
        } else{
            for(let i = 0; i < response.length ; i++){
                document.getElementById("serv"+i).remove();
                document.getElementById("pers"+i).remove();
                document.getElementById("cat"+i).remove();
                document.getElementById("completado"+i).remove();

            }
            document.getElementById('btn_services').value = "notprinted";
            document.getElementById('btn_services').innerText = "Mostrar Servicios";
        }
        
    } else {

      
        var element = document.getElementById("new");
        var h3 = document.createElement("label");
        h3.innerHTML= "Sin servicios"
        element.appendChild(h3);

    }




    //console.log("Servicios: "+servicesArray[0].name); 

    // for each sercvices add a label 

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

