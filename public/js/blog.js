

function borrarServicio(){
    alert("Se borró el servicio")
    console.log('Se borro el servicio')
}



async function registerService () {        
    let registerHeaders = {
        'Content-Type': 'application/json',
        "x-auth":  window.localStorage.token
    };

    let servicio = {
        name: document.getElementById('nameService').value,
        address: document.getElementById('addressService').value,
        price: document.getElementById('priceService').value,
        image: document.getElementById('imageService').value,
        categoria: document.getElementById('categoryService').value,
        description: document.getElementById('descriptionService').value, 
        offererId: "test@test.fr"
        
    }
    console.log(servicio.categoria)
    let result = await makeHTTPRequest('/services/add', 'POST', registerHeaders,JSON.stringify(servicio));
    if (result.error) {
        alert("Error: "+result.error)
    }else alert("Servicio: "+servicio.name+" agregado. ")
}

async function makeHTTPRequest(endpoint,method,headers,body) {
    return await fetch("https://proyecto-dasw.herokuapp.com"/*"http://127.0.0.1:5000"*/+endpoint,{method:method,body:body,headers:headers})
        .then(response => {
            return response.json()
        })
}