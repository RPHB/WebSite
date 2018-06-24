getMatchs()
    .then(function(data){
        initTableMatchs(data);
    });


function initTableMatchs(allMatchs){ 
    var teams;
    $.ajax({
       url : ROUTE_TEAMS + "/getAll",
       type : 'GET',
       dataType : 'json',
       async: false,
    }).done(function(data){
        teams = data;
    });

    var events;
    $.ajax({
       url : ROUTE_EVENTS + "/getAll",
       type : 'GET',
       dataType : 'json',
       async: false,
    }).done(function(data){
        console.log(data);
        events = data;
    });
    
	var jsonArray = [];
    for(var match in allMatchs){
        for(i = 0; i < teams.length; i++){
            if(allMatchs[match].idTeam1 == teams[i].id){
                allMatchs[match].idTeam1 = teams[i].name;
            }

            if(allMatchs[match].idTeam2 == teams[i].id){
                allMatchs[match].idTeam2 = teams[i].name;
            }
        }

        for(i = 0; i < events.length; i++){
            if(allMatchs[match].idEvent == events[i].id){
                allMatchs[match].idEvent = events[i].name;
            }
        }

        if(allMatchs[match].sport == 0){
            allMatchs[match].sport = "FootBall";
        }

        if(allMatchs[match].sport == 1){
            allMatchs[match].sport = "Rugby";
        }

        if(allMatchs[match].sport == 2){
            allMatchs[match].sport = "HandBall";
        }

        if(allMatchs[match].result == 0){
            allMatchs[match].result = "Pas encore Joué";
        }

        jsonArray.push({
            date : allMatchs[match].date.split('T')[0],
            idEvent : allMatchs[match].idEvent,
            idTeam1 : allMatchs[match].idTeam1,
            idTeam2 : allMatchs[match].idTeam2,
            quotation1 : allMatchs[match].quotation1,
            quotation2 : allMatchs[match].quotation2,
            quotation3 : allMatchs[match].quotation3,
            score : allMatchs[match].score,
            result : allMatchs[match].result,
            sport : allMatchs[match].sport
        });
        
    }
	$('#matchsTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
            field: 'date',
            title: 'Date',
            sortable : true,
        },{
            field: 'idEvent',
            title: 'Competition',
            sortable : true,
        }, {
            field: 'idTeam1',
            title: 'Equipe 1',
            sortable : true,
        }, {
            field: 'idTeam2',
            title: 'Equipe 2',
            sortable : true,
        }, {
            field: 'quotation1',
            title: 'Cote 1',
            sortable : true,
        }, {
            field: 'quotation2',
            title: 'Cote 2',
            sortable : true,
        }, {
            field: 'quotation3',
            title: 'Cote 3',
            sortable : true,
        }, {
            field: 'score',
            title: 'Score',
            sortable : true,
        }, {
	        field: 'result',
	        title: 'Resultat',
            sortable : true,
	    }, {
	        field: 'sport',
	        title: 'Sport',
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

//Méthode pour ajouter deux icones d'action à la fin d'une ligne du tableau des utilisateurs
function operateFormatterModels(value, row, index) {
	return [
        '<center><a class="viewModel" title="View">',
        '<span class="oi oi-eye" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
        '<a class="modifyModel" title="Editer">',
	    '<span class="oi oi-pencil" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteChapter" title="Supprimer">',
	    '<span class="oi oi-x" aria-hidden="true"></span>',
	    '</a></center>'
	].join('');
}

//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editDate").empty();
    	$("#editMatch").empty();
    	$("#editScore").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editDate").val(row.date);
    	$("#editMatch").val(row.match);
    	$("#editScore").val(row.score);
        
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	//$("#val_mod").attr("onclick", "editChapterBdd("+ row.match +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Add_Match_Modal').modal('show');
        

    },
    'click .deleteChapter': function (e, value, row, index) {
       	if (confirm("Etes-vous sûr de vouloir supprimer le match : "+row.match+"?")) {
            /*
		    deletChapter(row.id).then(function(){
                alert("Chapitre Supprimé");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de la suppression du chapitre");
            });*/
        }
    },
    
};