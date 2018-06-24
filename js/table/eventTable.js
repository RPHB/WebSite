/* Ficher de creations du Bootstrap Table User */
getEvents()
    .then(function(data){
        initTableEvents(data);
    });


function initTableEvents(allEvents){ 
    // Tableau de Données
	var jsonArray = [];
    for(var event in allEvents){
        
        jsonArray.push({
            id : allEvents[event].id,
            name : allEvents[event].name
        });
        
    }

	$('#eventsTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
	        field: 'Name',
	        title: 'Nom',
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

// Méthode pour ajouter deux icones d'action à la fin d'une ligne du tableau des utilisateurs
function operateFormatterModels(value, row, index) {
	return [
        '<center>',
        '<a class="modifyEvent" title="Editer">',
	    '<span class="oi oi-pencil" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteEvent" title="Supprimer">',
	    '<span class="oi oi-x" aria-hidden="true"></span>',
	    '</a></center>'
	].join('');
}

// Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyEvent': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editName").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#idEvent").text(row.id);
    	$("#editName").val(row.name);
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Event_Modal').modal('show');
        

    },
    'click .deleteEvent': function (e, value, row, index) {
        // Pop-up de confirmation
        swal({
          title: "Etes-vous sûr de vouloir supprimer l'évènement : "+row.username+"?",
          text: "Supprimer un évènement supprimera aussi tout ses paris",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteUser(row.id).then(function(){
                swal("Success!", "Évènement Supprimé", "success")
                .then((data) =>{
                    location.reload();
                });
                
            }).catch(function(){
                swal("Error!", "Un problème est survenu lors de la suppression", "error");
            });
          } else {
            swal("OK !","Évènement Non Supprimé !", "success");
          }
        });

    },
    
};

function editEvent(){
    var id = $("#idEvent").text();
    var name = $("#editName").text();
    updateEvent(id, name)
    .then(function(data){
        swal("Success!", "Évènement Modifié", "success")
        .then((data) =>{
            location.reload();
        });
    });
}

function addEvent(){
    var name = $("#addName").text();

    createEvent(name)
    .then(function(data){
        swal("Success!", "Évènement Ajouté", "success")
        .then((data) =>{
            location.reload();
        });
    }).catch(function(){
        swal("Error!", "Un problème est survenu lors de la création", "error");
    });
}