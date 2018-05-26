/* Liste des Fonctions CRUD pour Event */

function getEvents(){
    return $.ajax({
       url : ROUTE_EVENTS + "/getAllEvent",
       type : 'GET',
       dataType : 'json',
    });
}

function getBetEvent(id){
    return $.ajax({
       url : ROUTE_BETS + "/getForEvent/" + id,
       type : 'GET',
       dataType : 'json',
    });
}

function createEvent(id, name){
    return $.ajax({
       url : ROUTE_EVENTS + "/create/" + id + "/" + name,
       type : 'POST',
       dataType : 'json',
    });
}

function updateEvent(id, name){
    return $.ajax({
       url : ROUTE_EVENTS + "/update/" + id + "/" + name,
       type : 'PUT',
       dataType : 'json',
    });
}

function deleteEvent(id){
    return $.ajax({
       url : ROUTE_EVENTS + "/delete/" + id,
       type : 'DELETE',
       dataType : 'json',
    });
}

