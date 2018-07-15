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
        events = data;
    });

    
	var jsonArray = [];
    for(var match in allMatchs){
        for(i = 0; i < teams.length; i++){
            if(allMatchs[match].idTeam1 == teams[i].id){
                allMatchs[match].idTeam1 = teams[i].id + "/" +teams[i].name;
            }

            if(allMatchs[match].idTeam2 == teams[i].id){
                allMatchs[match].idTeam2 = teams[i].id + "/" +teams[i].name;
            }
        }

        for(i = 0; i < events.length; i++){
            if(allMatchs[match].idEvent == events[i].id){
                allMatchs[match].idEvent = events[i].id + "/" +events[i].name;
            }
        }

        if(allMatchs[match].sport == 1){
            allMatchs[match].sport = "1/FootBall";
        }

        if(allMatchs[match].sport == 2){
            allMatchs[match].sport = "2/Rugby";
        }

        if(allMatchs[match].sport == 3){
            allMatchs[match].sport = "3/HandBall";
        }

        if(allMatchs[match].result == 0){
            allMatchs[match].result = "Equipe 1";
        } else if(allMatchs[match].result == 1){
            allMatchs[match].result = "Match Null";
        } else if(allMatchs[match].result == 2){
            allMatchs[match].result = "Equipe 2";
        } else {
            allMatchs[match].result = "Pas encore Joué";
        }

        jsonArray.push({
            identification : allMatchs[match].id,
            date : allMatchs[match].date.split('T')[0],
            idEvent : allMatchs[match].idEvent.split('/')[1],
            idTeam1 : allMatchs[match].idTeam1.split('/')[1],
            idTeam2 : allMatchs[match].idTeam2.split('/')[1],
            quotation1 : allMatchs[match].quotation1,
            quotation2 : allMatchs[match].quotation2,
            quotation3 : allMatchs[match].quotation3,
            score : allMatchs[match].score,
            result : allMatchs[match].result,
            sport : allMatchs[match].sport.split('/')[1],
            team1 : allMatchs[match].idTeam1.split('/')[0],
            team2 : allMatchs[match].idTeam2.split('/')[0],
            events : allMatchs[match].idEvent.split('/')[0],
            idSport : allMatchs[match].sport.split('/')[0],
        });
    }
	$('#matchsTable').bootstrapTable({
	    pagination : true,
	    pageSize : 15,
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
        '<center><a class="modifyModel" title="Editer">',
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
    	$("#editCote1").empty();
        $("#editCote2").empty();
        $("#editCote3").empty();
        $("#editScore").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
        $("#editId").val(row.identification);
        $("#editSport").val(row.idSport);
        $("#editCompetition").val(row.events);
        $("#editDate").val(row.date);
        $("#editTeam1").val(row.team1);
        $("#editTeam2").val(row.team2);
        $("#editCote1").val(row.quotation1);
        $("#editCote2").val(row.quotation2);
        $("#editCote3").val(row.quotation3);
        $("#editScore").val(row.score);
        

        //on fait poper le modal modif utilisateur
        $('#Edit_Match_Modal').modal('show');
    },
    'click .deleteChapter': function (e, value, row, index) {
        // Pop-up de confirmation
        swal({
          title: "Etes-vous sûr de vouloir supprimer le match : "+row.idTeam1+" - "+row.idTeam2+"?",
          text: "Supprimer un match supprimera aussi tout les paris",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteMatchs(row.identification).then(function(){
                swal("Success!", "Match Supprimé", "success")
                .then((data) =>{
                    location.reload();
                });
                
            }).catch(function(){
                swal("Error!", "Un probleme est survenue lors de la suppression", "error");
            });
          } else {
            swal("OK !","Match Non Supprimé !", "success");
          }
        });

    },
    
};

function addNewMatch(){
    var sport = $("#addSport").val();
    var competition = $("#addCompetition").val();
    var date = $("#addDate").val();
    var team1 = $("#addTeam1").val();
    var team2 = $("#addTeam2").val();
    var cote1 = $("#addCote1").val();
    var cote2 = $("#addCote2").val();
    var cote3 = $("#addCote3").val();

   

    if(sport == null || competition == null || date == null || team1 == null || team2 == null || team1 == team2 || cote1 == null || cote2 == null || cote3 == null || cote1 < 1 || cote2 < 1 || cote3 < 1){
        swal("Error!", "Veuillez remplir tout les champs et leurs validité", "error");
    } else {
        $.ajax({
           url : ROUTE_MATCHS + "/create/"+team1+"/"+team2+"/"+date+"/"+cote1+"/"+cote2+"/"+cote3+"/"+sport+"/"+competition,
           type : 'update',
           dataType : 'json',
           async: false,
        }).done(function(data){
            swal("Success!", "Match Ajouté", "success")
            .then((data) =>{
                location.reload();
            });
        });
    }
    
}

function editMatch(){
    var id = $("#editId").val();
    var sport = $("#editSport").val();
    var competition = $("#editCompetition").val();
    var date = $("#editDate").val();
    var team1 = $("#editTeam1").val();
    var team2 = $("#editTeam2").val();
    var cote1 = $("#editCote1").val();
    var cote2 = $("#editCote2").val();
    var cote3 = $("#editCote3").val();
    var score = $("#editScore").val();

    if(sport == null || competition == null || date == null || team1 == null || team2 == null || team1 == team2 || cote1 == null || cote2 == null || cote3 == null || cote1 < 1 || cote2 < 1 || cote3 < 1){
        swal("Error!", "Veuillez remplir tout les champs et leurs validité", "error");
    } else {
        $.ajax({
           url : ROUTE_MATCHS + "/update/"+id+"/"+team1+"/"+team2+"/"+date+"/"+cote1+"/"+cote2+"/"+cote3+"/"+sport+"/"+competition+"/"+score,
           type : 'PUT',
           dataType : 'json',
           async: false,
        }).done(function(data){
            swal("Success!", "Match Modifié", "success")
            .then((data) =>{
                location.reload();
            });
        });
    }
    
}






