/* Liste des Fonctions CRUD pour Team */

function getTeams(){
    return $.ajax({
       url : ROUTE_TEAMS + "/getAll",
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

function getTeamName(id){
    return $.ajax({
       url : ROUTE_EVENTS + "/getTeamName/" + id,
       type : 'GET',
       dataType : 'json',
    });
}

function getId(teamName){
    return $.ajax({
       url : ROUTE_EVENTS + "/getId/" + teamName,
       type : 'GET',
       dataType : 'json',
    });
}

function createTeam(name, idSport){
    return $.ajax({
       url : ROUTE_TEAMS + "/create/" + name + "/" + idSport,
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

