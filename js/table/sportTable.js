/* Ficher de creations du Bootstrap Table Sport */
getSports()
    .then(function(data){
        initTableSports(data);
    });

function initTableSports(allSport){ 
    // Tableau de Données
	var jsonArray = [];
    for(var sport in allSport){
        
        jsonArray.push({
            id : allSport[sport].id,
            name : allSport[sport].name
        });
    }

	$('#sportsTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
	        field: 'name',
	        title: 'Nom',
            sortable : true,
	    }, {
	    	field: 'cellFormater',
	    	title: 'Actions',
	    	formatter : operateFormatterModel,
	    	events : operateEventsModel
	    }],
	    
	    data : jsonArray
	});
}

// Méthode pour ajouter deux icones d'action à la fin d'une ligne du tableau des utilisateurs
function operateFormatterModel(value, row, index) {
	return [
        '<center>',
        '<a class="modifySport" title="Editer">',
	    '<span class="oi oi-pencil" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteSport" title="Supprimer">',
	    '<span class="oi oi-x" aria-hidden="true"></span>',
	    '</a></center>'
	].join('');
}

// Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModel = {
    'click .modifySport': function (e, value, row, index) {
    	//On met les champs du modal à vide
    	$("#editSportName").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#idSport").text(row.id);
    	$("#editSportName").val(row.name);
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Sport_Modal').modal('show');

    },
    'click .deleteSport': function (e, value, row, index) {
        // Pop-up de confirmation
        swal({
          title: "Etes-vous sûr de vouloir supprimer le sport : "+row.name+"?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteSports(row.id).then(function(){
                swal("Success!", "Sport Supprimé", "success")
                .then((data) =>{
                    location.reload();
                });
                
            }).catch(function(){
                swal("Error!", "Un problème est survenu lors de la suppression", "error");
            });
          } else {
            swal("OK !","Sport Non Supprimé !", "success");
          }
        });
    }   
    
};

function editSport(){
    var id = $("#idSport").text();
    var name = $("#editSportName").val();
    console.log(name + " " + id);
    updateSports(id, name)
    .then(function(data){
        swal("Success!", "Sport Modifié", "success")
        .then((data) =>{
            location.reload();
        });
    });
}

function addSport(){
    var name = $("#addSportName").val();
    createSports(name)
    .then(function(data){
        swal("Success!", "Sport Ajouté", "success")
        .then((data) =>{
            location.reload();
        });
    }).catch(function(){
        swal("Error!", "Un problème est survenu lors de la création", "error");
    });
}