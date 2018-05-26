/* Liste des Fonctions CRUD pour Team */

function getTeams(){
    return $.ajax({
       url : ROUTE_TEAMS + "/getAllTeam",
       type : 'GET',
       dataType : 'json',
    });
}

function getBetTeam(id){
    return $.ajax({
       url : ROUTE_BETS + "/getForTeam/" + id,
       type : 'GET',
       dataType : 'json',
    });
}

function createTeam(id, name, idSport){
    return $.ajax({
       url : ROUTE_TEAMS + "/create/" + id + "/" + name + "/" + idSport,
       type : 'POST',
       dataType : 'json',
    });
}

function updateTeam(id, name, idSport){
    return $.ajax({
       url : ROUTE_TEAMS + "/update/" + id + "/" + name + "/" + idSport,
       type : 'PUT',
       dataType : 'json',
    });
}

function deleteTeam(id){
    return $.ajax({
       url : ROUTE_TEAMS + "/delete/" + id,
       type : 'DELETE',
       dataType : 'json',
    });
}

