'use strict'
$("document").ready(function () {
  urlVal();
})
function urlVal(){
  let contenedor = document.getElementById("lista")
  let contentUrl = window.location.href;
  let val = contentUrl.split("?")[1];
  contenedor.innerHTML = "";
  let htmlString = innerHTML(val);
  contenedor.innerHTML += htmlString;
  
}
 function loadPage(url) {
    url = url.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + url + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function fetchServices(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",`http://127.0.0.1:5500/Proyecto/ProyectoDASW/ProyectoDAWS/public/multipleServices.html?value=${url}`)
    //pedir variable
}

function showDetail(idService, idCategory){

  /*Si idCategory = {idBaile, idComida, idPerros, ... idX}
                Si idService == a N 
                    llamar imprimir idService N dentro del Modal
  }*/
  console.log("ShowDetail activated")
}

async function listServices(some){
  let headers = {
      'Content-Type': 'application/json',
      'x-auth': window.localStorage.token
    };
    
      let result = await makeHTTPRequest('/services/by-categories/'+some, 'GET', headers);
      let email = window.localStorage.userEmail;
      if (result.length > 0){
        console.log(result);
        let htmlOptions = "";
        result.forEach(service => {
            htmlOptions +=  
            `
            
        <ul class="row">
          <li class="col-12 col-md-12 col-md-12">
              <div class="cnt-block " style="height: auto;">
                <figure><img src="https://picsum.photos/200/300" class="img-responsive" alt="https://picsum.photos/200/300/?blur" width="100%"></figure>
                <h3 class="heading"><a href="#">${service.name}</a></h3>
                <div class="desc pl-3">
                    <span>${service.offererId}</span>
                    <span>${service._id}</span>

                </div>

                <p>Costo: $${service.price}</p>
                <p>Dirección: ${service.address}</p>
                <p>Descripción: ${service.description}</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <button onclick="contratar('${service._id}')" class="btn btn-default"  >Contratar</button>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>`
            
            
        })
        
        document.getElementById("lista").innerHTML = htmlOptions
    }else{
        alert("No tiene servicios, para agregar algún servicio, de click en el Botón 'Agregar Servicios'");
    }
    return result
}
async function contratar( id){
  
  window.localStorage.id = id;
  let headers = {
    'Content-Type': 'application/json',
    'x-auth': window.localStorage.token,
    "x-user":window.localStorage.userEmail,
    "data-id": id   
};
  let bodyToUpdate = {
    _id: id,
    clientId:window.localStorage.userEmail
  }
  let response = await fetch('/services/update-client/'+id+'/'+window.localStorage.userEmail,{method:"PUT",body:JSON.stringify(bodyToUpdate),headers})
  .then(response => {
    console.log(response);
    alert("Servicio contratado.")
    setTimeout(function () {
        $(".alert").remove();
    },3000);
});
}
async function makeHTTPRequest(endpoint,method,headers,body=null) {
  return await fetch("https://proyecto-dasw.herokuapp.com"/*"http://127.0.0.1:5000"*/+endpoint,{method:method,body:body,headers:headers})
      .then(response => {
          return response.json()
      })
}

 function innerHTML(val){
    var valor = loadPage('value')
    switch (valor) {
        case 'comida':

          listServices("comida");
          break;
            
        case 'baile':
          listServices("baile");
          break;
        case 'perros':
          listServices("perros");
          break;
        case 'tutorias':
          listServices("tutorias");
          break;
        case 'limpieza':
          listServices("limpieza");
          break;
        case 'electro':
          listServices("electro");
          break;
        case 'ninera':
          listServices("ninera");
          break;
        case 'jardineria':
          listServices("jardineria");
          break;
        default:
          allservices();
          break;
        }
      }

    async function allservices(){
      let headers = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token
      };
      let result = await makeHTTPRequest('/services', 'GET', headers);
  
  if (result.length > 0){
    console.log(result);
    let htmlOptions = "";
    result.forEach(service => {
        htmlOptions +=  
  `
    <div class="row">
      <div class="col-12 col-md-12 col-md-12">
          <div class="cnt-block " style="height: auto;">
            <figure><img src="https://picsum.photos/200/300" class="img-responsive" alt="https://picsum.photos/200/300/?blur" width="100%"></figure>
            <h3 class="heading"><a href="#">${service.name}</a></h3>
            <div class="desc pl-3">
                <span>${service.offererId}</span>
                <span>${service._id}</span>
            </div>

            <p>Costo: $${service.price}</p>
            <p>Dirección: ${service.address}</p>
            <p>Descripción: ${service.description}</p>
            <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
            <a href="#modal01" rel="modal:open" onclick="contratar(${service.name, service._id})" class="btn btn-default"  >Contratar</a>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </div>
      </div>`
    })
  }else return alert(error);
}
$(document).ready(function() {

    $('a [href = "#modal01"]').click(function() {
        $(this).modal({
            fadeDuration: 100
          });
    });
    return false;

})