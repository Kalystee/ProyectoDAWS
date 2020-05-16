
$("document").ready(function () {
    initializeSelectCategories();
    listServices();
})

async function initializeSelectCategories(){
    let headers = {
        'Content-Type': 'application/json',
    };
    let result = await makeHTTPRequest('/categories/', 'GET', headers);

    if (result.length > 0){
        console.log(result);
        let htmlOptions = "";
        result.forEach(categorie => {
            htmlOptions += "<option value='"+categorie.id+"'>"+categorie.name+"</option>"
        })
        $("#selectCategories").append(htmlOptions); //Something like that to initialize the categories menu is good
    }else{
        alert("ERROR :"+result.error)
    }
}

async function registerService () {
    event.preventDefault();
    let registerHeaders = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token
    };
    
    let servicio = {
        name: document.getElementById('nameService').value,
        description: document.getElementById('descriptionService').value, 
        price: document.getElementById('priceService').value,
        categoryId: document.getElementById('categoryService').value,
        address: document.getElementById('addressService').value,
        offererId: window.localStorage.userEmail
//        image: document.getElementById('imageService').value //Guillaume :Pienso que no vamos a utilizar imagen al final, no tenemos tiempo
        
    }
    
    console.log(servicio)
    
    let result = await makeHTTPRequest('/services/add', 'POST', registerHeaders, JSON.stringify(servicio));

    if (result.error){
        alert("Error: "+result.error)
    }else{
        alert("Servicio: "+result.name+" agregado. ")
    }
} 

async function makeHTTPRequest(endpoint,method,headers,body=null) {
    return await fetch("https://proyecto-dasw.herokuapp.com"/*"http://127.0.0.1:5000"*/+endpoint,{method:method,body:body,headers:headers})
        .then(response => {
            return response.json()
        })
}





async function listServices(){
    let headers = {
        'Content-Type': 'application/json',
        'x-auth': window.localStorage.token
    };
    let user = window.localStorage.userEmail;
    alert(`${user}`)
    let result = await makeHTTPRequest('/services/by-offerer/'+window.localStorage.userEmail, 'GET', headers);
    if (result.length > 0){
        console.log(result);
        let htmlOptions = "";
        result.forEach(service => {
            htmlOptions +=  
            `<div class="col-md-6 col-lg-3 d-flex center ">
                <div class="blog-entry align-self-stretch">
                    <button onclick="borrarServicio('${service._id}')" class="btn btn-danger ft-trash" aria-hidden="true">Quitar</button>
                    <button onclick="editarServicio('${service._id})'" class="btn btn-dark ft-trash" aria-hidden="true">Editar</button>
                    <a href="blog-single.html" class="block-20 rounded" style="background-image: url('./images/image_1.jpg');"></a>
                    <div class="text mt-3 px-4">
                        <div class="img author" style="background-image: url('./images/person_2.jpg');"></div>
                        <div class="desc pl-3">
                            <span>${service.offererId}</span>
                        </div>
                    </div>
                    <h3 class="heading"><a href="#">${service.name}</a></h3>
                    <p>Costo: $${service.price}</p>
                    <p>Dirección: ${service.address}</p>
                    <p>Descripción: ${service.description}</p>
                </div>
            </div>`
            
        })
        
        document.getElementById("lista").innerHTML = htmlOptions
    }else{
        alert("No tiene servicios, para agregar algún servicio, de click en el Botón 'Agregar Servicios'");
    }
}


async function borrarServicio(serviceId){
    console.log(serviceId)
    let headers =   {"Content-Type" : "application/json",
                    "x-auth": window.localStorage.token};
    let result = await makeHTTPRequest('/services/'+serviceId, 'DELETE', headers, null);
    
    if (result.error){
        alert(error)
        }else alert('Servicio borrado compadre')
    }


