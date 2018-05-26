/* Liste des Fonctions CRUD pour User */

function getUsers(){
    return $.ajax({
       url : ROUTE_USERS + "/getAllUser",
       type : 'GET',
       dataType : 'json',
    });
}

function getBetUsers(id){
    return $.ajax({
       url : ROUTE_BETS + "/getForUser/" + id,
       type : 'GET',
       dataType : 'json',
    });
}

function createUser(pseudo, password, email){
    return $.ajax({
       url : ROUTE_USERS + "/create/" + pseudo + "/" + password + "/" + email,
       type : 'POST',
       dataType : 'json',
    });
}

function updateUser(id, pseudo, email,admin){
    return $.ajax({
       url : ROUTE_USERS + "/update/" + id + "/" + pseudo + "/" + email + "/" + admin,
       type : 'PUT',
       dataType : 'json',
    });
}

function deleteUser(id){
    return $.ajax({
       url : ROUTE_USERS + "/delete/" + id,
       type : 'DELETE',
       dataType : 'json',
    });
}

