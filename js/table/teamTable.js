/* Ficher de creations du Bootstrap Table Team */
getTeams()
    .then(function(data){
        initTableTeams(data);
    });


function initTableTeams(allTeams){ 
    // Tableau de Données
	var jsonArray = [];
    for(var team in allTeams){

        if(allTeams[team].sport == 0){
            allTeams[team].sport = "FootBall";
        }

        if(allTeams[team].sport == 1){
            allTeams[team].sport = "Rugby";
        }

        if(allTeams[team].sport == 2){
            allTeams[team].sport = "HandBall";
        }

        if(allTeams[team].result == 0){
            allTeams[team].result = "Pas encore Joué";
        }
        
        jsonArray.push({
            id : allTeams[team].id,
            name : allTeams[team].name,
            sport : allTeams[team].sport
        });
        
    }

	$('#teamsTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
	        field: 'id',
	        title: 'ID',
            sortable : true,
	    }, {
	        field: 'name',
	        title: 'Nom',
            sortable : true,
	    }, {
	        field: 'sport',
	        title: 'ID Sport',
            sortable : true,
	    }, {
	    	field: 'cellFormater',
	    	title: 'Actions',
	    	formatter : operateFormatterModels,
	    	events : operateEventsModels
	    }],
	    
	    data : jsonArray
	});
}

// Méthode pour ajouter deux icones d'action à la fin d'une ligne du tableau des équipes
function operateFormatterModels(value, row, index) {
	return [
        '<center>',
        '<a class="modifyTeam" title="Editer">',
	    '<span class="oi oi-pencil" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteTeam" title="Supprimer">',
	    '<span class="oi oi-x" aria-hidden="true"></span>',
	    '</a></center>'
	].join('');
}

// Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyTeam': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editName").empty();
    	$("#editIdSport").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#idTeam").text(row.id);
    	$("#editName").val(row.name);
    	$("#editIdSport").val(row.idSport);
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Team_Modal').modal('show');
        

    },
    'click .deleteTeam': function (e, value, row, index) {
        // Pop-up de confirmation
        swal({
          title: "Etes-vous sûr de vouloir supprimer l'équipe : "+row.name+"?",
          text: "Supprimer une équipe supprimera aussi tout ses paris",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteTeam(row.id).then(function(){
                swal("Success!", "Équipe Supprimée", "success")
                .then((data) =>{
                    location.reload();
                });
                
            }).catch(function(){
                swal("Error!", "Un probleme est survenue lors de la suppression", "error");
            });
          } else {
            swal("OK !","Équipe Non Supprimée !", "success");
          }
        });

    },
    
};

function editTeam(){
    var id = $("#idTeam").text();
    var name = $("#editName").val();
    var idSport = $("#editIdSport").val();
    updateTeam(id, name, idSport)
    .then(function(data){
        swal("Success!", "Équipe Modifiée", "success")
        .then((data) =>{
            location.reload();
        });
    });
}

function addTeam(){
    var name = $("#addName").val();
    var idSport = $("#addIdSport").val();

    createTeam(name, idSport)
    .then(function(data){
        swal("Success!", "Équipe Ajoutée", "success")
        .then((data) =>{
            location.reload();
        });
    }).catch(function(){
        swal("Error!", "Un probleme est survenue lors de la création", "error");
    });
}