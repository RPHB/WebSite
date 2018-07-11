/* Liste des Fonctions CRUD pour Event */

function getSports(){
    return $.ajax({
       url : ROUTE_SPORTS + "/getAll",
       type : 'GET',
       dataType : 'json',
    });
}

function createSports(name){
    return $.ajax({
       url : ROUTE_SPORTS + "/create/" + name,
       type : 'POST',
       dataType : 'json',
    });
}

function updateSports(id, name){
    return $.ajax({
       url : ROUTE_SPORTS + "/update/" + id + "/" + name,
       type : 'PUT',
       dataType : 'json',
    });
}

function deleteSports(id){
    return $.ajax({
       url : ROUTE_SPORTS + "/delete/" + id,
       type : 'DELETE',
       dataType : 'json',
    });
}

