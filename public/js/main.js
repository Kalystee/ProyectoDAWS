window.localStorage = {};

//formInvalidCheck
let formRegister = $("#register-form");
let submitRegitrerButton = $('#register-form button[type="submit"]');


formRegister.on("change",function () {
    if ($("#register-form input:invalid").length === 0 && $("#register-form input[name='password']").val() === $("#register-form input[name='password2']").val() && $("#register-form #terms").prop("checked") === true) {
        submitRegitrerButton.prop("disabled", false);
    } else {
        submitRegitrerButton.prop("disabled", true);
    }
});



formRegister.on("submit",function (event) {
    event.preventDefault();
    let objecto = {
        "firstName":$("#register-form input[name='firstName']").val(),
        "lastName":$("#register-form input[name='lastName']").val(),
        "age":$("#register-form input[name='age']").val(),
        "sex":$("#register-form select[name='sex']").val(),
        "email":$("#register-form input[name='email']").val(),
        "password":$("#register-form input[name='password']").val(),
        "address":$("#register-form input[name='address']").val(),

    };
    console.log(objecto);
    const url = "http://localhost:5000/users/add ";
    let response = fetch(url,{ method: 'POST', body: JSON.stringify(objecto),headers: {"Content-Type":"application/json"}});
    console.log(response)
    if(response.status !== 200 ){
        alert("An error occured, try again");
    } else{
        console.log(response.data["error"]);    
    }
});


//Login
$("#modelId #login").on("click",login);
async function login() {
    let objecto = {
        "correo": $("#modelId input[name='username']").val(),
        "password": $("#modelId input[name='password']").val(),
    };
    const url = "https://users-dasw.herokuapp.com/api/login ";
    localStorage.token_user = await fetch(url,{ method: 'POST', body: JSON.stringify(objecto),headers: {"Content-Type":"application/json","x-auth":localStorage.token}})
        .then(response => {
            return response.json();
        }).then(json => {
            return json.token;
        });

    if(localStorage.token_user !== undefined){
        window.location.href = "./consulta.html";
    }else{
        alert("Error !");
    }
}

//Admin Functions
async function loadUsersInHTML() {
    let users = await fetch("https://users-dasw.herokuapp.com/api/users",{method:"GET",headers: {"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
        .then(res => {
            return res.json();
        }).then(json => {
            return json
        });

    let html = "";
    users.forEach(item => {
        html += userToHTML(item);
    });
    $("#lista").html(html);
}

function addAlertHTML(parentSelector,message,type="success") {
    $(parentSelector).prepend('<div class=\"alert alert-'+type+'\" role=\"alert\">'+message+'</div>');
}
function userToHTML(user) {
    let sexo = user.sexo === "H" ? "Hombre" : "Mujer";
    console.log(user);
    return "<div class=\"media col-8 mt-2\" >\n" +
        "                <div class=\"media-left align-self-center mr-3\">\n" +
        "                    <img class=\"rounded-circle\" style=\"width: 120px;\" src=\" "+user.url+" \">\n" +
        "                </div>\n" +
        "                <div class=\"media-body\">\n" +
        "                    <h4>"+user.nombre+" "+ user.apellido+"</h4>\n" +
        "                    <p >Correo: "+user.correo+"</p>\n" +
        "                    <p >Fecha de nacimiento: 08/07/1998 </p>\n" +
        "                    <p >Sexo: "+sexo+" </p>\n" +
        "                </div>\n" +
        "                <div class=\"media-right align-self-center\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\" onclick=\"verUser(\'"+user.correo+"\')\"  class=\"btn btn-primary edit\"><i class=\"fas fa-search edit  \"></i></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\" data-toggle=\"modal\" data-target=\"#editarUser_"+user.iid+" \"class=\"btn btn-primary mt-2\"><i class=\"fas fa-pencil-alt edit  \"></i></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\"  data-toggle=\"modal\" data-target=\"#borarUser_"+user.iid+" \"class=\"btn btn-primary mt-2\"><i class=\"fas fa-trash-alt  remove \"></i></i></a>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div><!-- Modal -->\n" +
        "    <div class=\"modal fade\" id=\"editarUser_"+ user.iid +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\">Editar usuario</h5>\n" +
        "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
        "                        <span aria-hidden=\"true\">&times;</span>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    <form action=\"\" >\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <input type=\"text\" name=\"nombre\" id=\"\" class=\"form-control\" placeholder=\"Nombre o nombres\" aria-describedby=\"helpId\" value=\""+user.nombre +"\" required>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <input type=\"text\" name=\"apellido\" id=\"\" class=\"form-control\" placeholder=\"Apellidos\" aria-describedby=\"helpId\" value=\""+user.apellido +"\" required>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <input type=\"url\" name=\"url\" id=\"url\" class=\"form-control mt-3\" placeholder=\"Url de imagen de perfil\" value=\""+user.url +"\">\n" +
        "                        <button type=\"button\"  data-dismiss=\"modal\" onclick=\"editUser('"+user.correo+"')\" class=\"btn btn-success mt-3\" >Modificar</button>\n" +
        "                        <button type=\"button\" class=\"btn btn-secondary mt-3\" data-dismiss=\"modal\">Close</button>\n" +
        "\n" +
        "                    </form>\n" +
        "\n" +
        "\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"modal fade\" id=\"borarUser_"+ user.iid +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\">Borar usuario ?</h5>\n" +
        "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
        "                        <span aria-hidden=\"true\">&times;</span>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    <form action=\"\" >\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <p>Nombre :"+user.nombre+"</p>\n"+
        "                                <p>Apellido: "+user.apellido+"</p>\n"+
        "                                <p>Correo: "+user.correo+"</p>\n"+
        "                                <p class='mt-2 text-center'>Borrar este usurario ?</p>\n"+
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <button type=\"button\"  data-dismiss=\"modal\" onclick=\"deleteUser('"+user.correo+"')\" class=\"btn btn-success mt-3\" >Borar usurario</button>\n" +
        "                        <button type=\"button\" class=\"btn btn-secondary mt-3\" data-dismiss=\"modal\">Cancelar</button>\n" +
        "\n" +
        "                    </form>\n" +
        "\n" +
        "\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>"
        ;
}

function verUser(correo) {
    console.log("aaa");
    window.location.href = "./detalle.html";
}

async function editUser(correo) {
    let user = await fetch("https://users-dasw.herokuapp.com/api/users/"+correo,{method:"GET",headers:{"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
        .then(response => {
            return response.json()
        }).then(json => {
            return json;
        });
    let modalId = "#editarUser_"+user.iid;
    let modal = document.querySelector(modalId);
    user.nombre = modal.querySelector("input[name='nombre']").value;
    user.apellido = modal.querySelector("input[name='apellido']").value;;
    user.url = modal.querySelector("input[name='url']").value;
    let response = await fetch("https://users-dasw.herokuapp.com/api/users/"+correo,{method:"PUT",body:JSON.stringify(user),headers:{"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
        .then(response => {
            console.log(response);
            loadUsersInHTML();
            addAlertHTML(".container","Usuario actualizado");
            setTimeout(function () {
                $(".alert").remove();
            },3000);
        })
}
async function deleteUser(correo) {
    await fetch("https://users-dasw.herokuapp.com/api/users/"+correo,{method:"DELETE",headers:{"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
        .then(response => {
            if(response.status === 200){
                loadUsersInHTML();
                addAlertHTML(".container","User deleted")
            }else{
                addAlertHTML(".container","An error occured","danger")
            }
        })
}

/*let allUsers = [];;
fetch("https://users-dasw.herokuapp.com/api/users",{method:"GET",headers: {"Content-Type":"application/json","x-auth":window.localStorage.token,"x-user-token":window.localStorage.token_user}})
    .then(res => {
        return res.json();
    }).then(json => {
    allUsers = json;
});*/

function filterUsers(){
    let nombreFilter = document.querySelector('#search').value;
    if(nombreFilter !== ""){
        users = allUsers.filter(u => u.nombre.toLowerCase().search(nombreFilter.toLowerCase()) !== -1);
        loadUsersFilterInHTML(users);
    }


}

/*document.querySelector('#search').addEventListener("keyup",filterUsers,false);
document.querySelector('#searchButton').addEventListener("click",filterUsers,false);*/

async function loadUsersFilterInHTML(users) {
    let html = "";
    users.forEach(item => {
        html += userFilterToHTML(item);
    });
    $("#lista").html(html);
}


function userFilterToHTML(user) {
    return "<div class=\"media col-6 mt-2\" >\n" +
        "                <div class=\"media-left align-self-center mr-3\">\n" +
        "                    <img class=\"rounded-circle\" style=\"width: 120px;\" src=\" "+user.url+" \">\n" +
        "                </div>\n" +
        "                <div class=\"media-body\">\n" +
        "                    <h4>"+user.nombre+" "+ user.apellido+"</h4>\n" +
        "                    <p >Correo: "+user.correo+"</p>\n" +
        "                </div>\n" +
        "                <div class=\"media-right align-self-center\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\" onclick=\"verUser(\""+user.correo+"\")\"  class=\"btn btn-primary edit\"><i class=\"fas fa-search edit  \"></i></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\" data-toggle=\"modal\" data-target=\"#editarUser_"+user.iid+" \"class=\"btn btn-primary mt-2\"><i class=\"fas fa-pencil-alt edit  \"></i></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                        <a href=\"#\"  data-toggle=\"modal\" data-target=\"#borarUser_"+user.iid+" \"class=\"btn btn-primary mt-2\"><i class=\"fas fa-trash-alt  remove \"></i></i></a>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div><!-- Modal -->\n" +
        "    <div class=\"modal fade\" id=\"editarUser_"+ user.iid +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\">Editar usuario</h5>\n" +
        "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
        "                        <span aria-hidden=\"true\">&times;</span>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    <form action=\"\" >\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <input type=\"text\" name=\"nombre\" id=\"\" class=\"form-control\" placeholder=\"Nombre o nombres\" aria-describedby=\"helpId\" value=\""+user.nombre +"\" required>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <input type=\"text\" name=\"apellido\" id=\"\" class=\"form-control\" placeholder=\"Apellidos\" aria-describedby=\"helpId\" value=\""+user.apellido +"\" required>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <input type=\"url\" name=\"url\" id=\"url\" class=\"form-control mt-3\" placeholder=\"Url de imagen de perfil\" value=\""+user.url +"\">\n" +
        "                        <button type=\"button\"  data-dismiss=\"modal\" onclick=\"editUser('"+user.correo+"')\" class=\"btn btn-success mt-3\" >Modificar</button>\n" +
        "                        <button type=\"button\" class=\"btn btn-secondary mt-3\" data-dismiss=\"modal\">Close</button>\n" +
        "\n" +
        "                    </form>\n" +
        "\n" +
        "\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"modal fade\" id=\"borarUser_"+ user.iid +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\">Borar usuario ?</h5>\n" +
        "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
        "                        <span aria-hidden=\"true\">&times;</span>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    <form action=\"\" >\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-6\">\n" +
        "                                <p>Nombre :"+user.nombre+"</p>\n"+
        "                                <p>Apellido: "+user.apellido+"</p>\n"+
        "                                <p>Correo: "+user.correo+"</p>\n"+
        "                                <p class='mt-2 text-center'>Borrar este usurario ?</p>\n"+
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <button type=\"button\"  data-dismiss=\"modal\" onclick=\"deleteUser('"+user.correo+"')\" class=\"btn btn-success mt-3\" >Borar usurario</button>\n" +
        "                        <button type=\"button\" class=\"btn btn-secondary mt-3\" data-dismiss=\"modal\">Cancelar</button>\n" +
        "\n" +
        "                    </form>\n" +
        "\n" +
        "\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>"
        ;
}
