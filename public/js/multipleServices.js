'use strict'
let contenedor = document.getElementById("lista")
let contentUrl = window.location.href;
let val = contentUrl.split("?")[1];
contenedor.innerHTML = "";
let htmlString = innerHTML(val);
contenedor.innerHTML += htmlString;

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

function innerHTML(val){
    var valor = loadPage('value')
    switch (valor) {
        case 'comida':
            return`<div class="row heading heading-icon">
            <h2>Servicios de Comida</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/comida01.jpg" class="img-responsive" alt="/images/comida01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Italiana</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default"  >Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/comida02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Pozolatzo & más</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail()" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/comida03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Flautas </a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" OnClick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
            break;
        case 'baile':
            return `<div class="row heading heading-icon">
            <h2>Servicios de baile</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/baile01.jpg" class="img-responsive" alt="/images/baile01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">La primer cena</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/baile02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Baile de Salón </a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/baile03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Manish </a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
            
        case 'perros':
            return`<div class="row heading heading-icon">
            <h2>Servicio para pasear sus mascotas</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/perros01.jpg" class="img-responsive" alt="/images/perros01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">WowtsApp</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/perros02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Perros y gatos</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/perros03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">De Dog patas </a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
            
        case 'tutorias':
            return`<div class="row heading heading-icon">
            <h2>Servicio de tutorías</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/tutorias01.jpg" class="img-responsive" alt="/images/perros01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Tutor sin barreras</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/tutorias02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Súmale al 0</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/tutorias03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Mathemathics</a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
        case 'limpieza':
            return`<div class="row heading heading-icon">
            <h2>Servicio de limpieza</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/limpieza01.jpg" class="img-responsive" alt="/images/limpieza01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Limpieza profunda</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/limpieza02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Mr. Limpio</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/limpieza03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Hogar limpio</a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
        case 'electro':
            return`<div class="row heading heading-icon">
            <h2>Servicio de electronicos</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/electro01.jpg" class="img-responsive" alt="/images/perros01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Jack Electrico</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/electro02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Electrico </a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/electro03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">ElectroMan</a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
        case 'ninera':
            return`<div class="row heading heading-icon">
            <h2>Servicio de niñera</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/niñera01.jpg" class="img-responsive" alt="/images/perros01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Ana</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open"  onclick="showDetail()"class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/niñera02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Jessica</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/niñera03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Camila </a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
        case 'jardineria':
            return`<div class="row heading heading-icon">
            <h2>Servicio Jardinería</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/jardineria01.jpg" class="img-responsive" alt="/images/perros01.jpg" width="100%"></figure>
                <h3><a id="show-modal-Primer" href="#">Jardín al 3</a></h3>
                <p>&map; Patricio Rum</p>
                <p>San Jacinto #23 3399887766</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton1">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/jardineria02.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Baile" href="#">Don Paco</a></h3>
                <p>&map; Jacob Lals</p>
                <p>Avenida 33 3344556677</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton2">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-32
                    " aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style="height: 349px;">
                <figure><img src="./images/jardineria03.jpg" class="img-responsive" alt=""></figure>
                <h3><a id="show-modal-Manish" href="#">Jardín y más</a></h3>
                <p> &map; Samantha Hart</p>
                <p>Circunvalación #79 1232145676</p>
                <!--<button class="btn btn-default" onclick="showDetail" id="idButton3">Me interesa</button>-->
                <a href="#modal01" rel="modal:open" onclick="showDetail()" class="btn btn-default">Me interesa</a>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
           </li>
        </ul>
        <div class="modal" id="modal01" >
        <p>Aqui va la BD del prestador de servicios. PROXIMAMENTE</p>
        <button class="btn btn-primary">Contratar</button>
        </div>`
        default:
            break;
    }
}



$(document).ready(function() {

    $('a [href = "#modal01"]').click(function() {
        $(this).modal({
            fadeDuration: 100
          });
    });
    return false;

})