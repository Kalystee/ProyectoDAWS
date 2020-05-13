
$("document").ready(function () {
    initializeSelectCategories();
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
        offererId: "test@test.fr"
//        image: document.getElementById('imageService').value //Guillaume :Pienso que no vamos a utilizar imagen al final, no tenemos tiempo
        
    }
    
    console.log(servicio)
    
    let result = await makeHTTPRequest('/services/add/', 'POST', registerHeaders,JSON.stringify(servicio));

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




//listServices();
function listServices(){
    
}

function borrarServicio(){
    
}