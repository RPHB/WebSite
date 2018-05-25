/* Liste des Fonctions CRUD pour Match */

function getMatchs(){
    return $.ajax({
       url : ROUTE_MATCHS + "/getAll",
       type : 'GET',
       dataType : 'json',
    });
}