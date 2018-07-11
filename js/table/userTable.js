/* Ficher de creations du Bootstrap Table User */
getUsers()
    .then(function(data){
        initTableUsers(data);
    });


function initTableUsers(allUsers){ 
    // Tableau de Données
	var jsonArray = [];
    for(var user in allUsers){
        
        if(allUsers[user].admin == 1){
            allUsers[user].admin = "Administrateur";
        } else {
            allUsers[user].admin = "Utilisateur Simple";
        }

        if(allUsers[user].birth != null){
            allUsers[user].birth = allUsers[user].birth.split('T')[0]
        }
        
        jsonArray.push({
            id : allUsers[user].id,
            username : allUsers[user].username,
            lastname : allUsers[user].lastname,
            firstname : allUsers[user].firstname,
            address : allUsers[user].address,
            birth : allUsers[user].birth,
            email : allUsers[user].email,
            tokens : allUsers[user].tokens,
            admin : allUsers[user].admin
        });
        
    }

	$('#usersTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
	        field: 'username',
	        title: 'Pseudo',
            sortable : true,
	    }, {
            field: 'lastname',
            title: 'Nom',
            sortable : true,
        }, {
            field: 'firstname',
            title: 'Prenom',
            sortable : true,
        }, {
            field: 'birth',
            title: 'Date de Naissance',
            sortable : true,
        }, {
            field: 'address',
            title: 'Adresse',
            sortable : true,
        }, {
	        field: 'email',
	        title: 'Email',
            sortable : true,
	    }, {
	        field: 'tokens',
	        title: 'Jetons',
            sortable : true,
	    }, {
	        field: 'admin',
	        title: 'Role',
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
    if(row.admin == "Administrateur"){
    	return [
            '<center>',
            '<a class="betUser" title="Bets">',
            '<span class="oi oi-menu" aria-hidden="true"></span>',
    	    '</a></center>'
    	].join('');
    } else {
        return [
            '<center>',
            '<a class="betUser" title="Bets">',
            '<span class="oi oi-menu" aria-hidden="true"></span>',
            '</a>&nbsp;&nbsp;&nbsp;',
            '<a class="modifyUser" title="Editer">',
            '<span class="oi oi-pencil" aria-hidden="true"></span>',
            '</a>&nbsp;&nbsp;&nbsp;',
            '<a class="deleteUser" title="Supprimer">',
            '<span class="oi oi-x" aria-hidden="true"></span>',
            '</a></center>'
        ].join('');
    } 
}

// Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .betUser': function (e, value, row, index) {
        $('#betUserBody').html('<table id="usersBetTable"></table>');
        $("#nameUserForBets").val(row.pseudo);

        var matchs;
        $.ajax({
           url : ROUTE_MATCHS + "/getAll",
           type : 'GET',
           dataType : 'json',
           async: false,
        }).done(function(data){
            matchs = data;
        });

        var team;
        $.ajax({
           url : ROUTE_TEAMS + "/getAll",
           type : 'GET',
           dataType : 'json',
           async: false,
        }).done(function(data){
            team = data;
        });

        getBetUsers(row.id)
        .then(function(bets){
            var jsonTable = [];

            for(var bet in bets){
                if(bets[bet].isPayed == 1){
                    bets[bet].isPayed = "Oui";
                } else {
                    bets[bet].isPayed = "Non";
                }

                for(var m in matchs){
                    if(bets[bet].idMatch == matchs[m].id){
                        team1 = matchs[m].idTeam1;
                        team2 = matchs[m].idTeam2;
                        for(var t in team){
                            if(team1 == team[t].id){
                                team1 = team[t].name;
                            }
                            if(team2 == team[t].id){
                                team2 = team[t].name;
                            }
                        }
                        bets[bet].idMatch = team1 + " - " + team2
                    }
                }

                if(bets[bet].choice == 0){
                    bets[bet].choice = team1;
                }
                if(bets[bet].choice == 1){
                    bets[bet].choice = "Match Null";
                }
                if(bets[bet].choice == 2){
                    bets[bet].choice = team2;
                }

                if(bets[bet].date != null){
                    bets[bet].date = bets[bet].date.split('T')[0]
                }
                
                jsonTable.push({
                    idMatch : bets[bet].idMatch,
                    tokens : bets[bet].tokens,
                    choice : bets[bet].choice,
                    date : bets[bet].date,
                    isPayed : bets[bet].isPayed
                });
            }

            $('#usersBetTable').bootstrapTable({
                pagination : true,
                pageSize : 10,
                search : true,
                columns: [{
                    field: 'idMatch',
                    title: 'Match',
                    sortable : true
                }, {
                    field: 'tokens',
                    title: 'Jetons',
                    sortable : true
                }, {
                    field: 'choice',
                    title: 'Choix',
                    sortable : true
                }, {
                    field: 'date',
                    title: 'Date',
                    sortable : true
                }, {
                    field: 'isPayed',
                    title: 'Payé',
                    sortable : true
                }],
                data : jsonTable
            });
            //on fait poper le modal modif utilisateur
            $("#Bets_For_User").modal('show');
        });
    },
    'click .modifyUser': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editPseudo").empty();
    	$("#editEmail").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#idUtilisateur").text(row.id);
    	$("#editPseudo").val(row.username);
        $("#editLastname").val(row.lastname);
        $("#editFirstname").val(row.firstname);
        $("#editAddess").val(row.address);
        $("#editBirth").val(row.birth);
    	$("#editEmail").val(row.email);
        
        //on fait poper le modal modif utilisateur
        $('#Edit_User_Modal').modal('show');
        

    },
    'click .deleteUser': function (e, value, row, index) {
        // Pop-up de confirmation
        swal({
          title: "Etes-vous sûr de vouloir supprimer l'utilisateur : "+row.username+"?",
          text: "Supprimer un utilisateur supprimera aussi tout ses paris",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteUser(row.id).then(function(){
                swal("Success!", "Utilisateur Supprimé", "success")
                .then((data) =>{
                    location.reload();
                });
                
            }).catch(function(){
                swal("Error!", "Un probleme est survenue lors de la suppression", "error");
            });
          } else {
            swal("OK !","Utilisateur Non Supprimé !", "success");
          }
        });

    },
    
};

function editUser(){
    var id = $("#idUtilisateur").text();
    var pseudo = $("#editPseudo").val();
    var email = $("#editEmail").val();
    var lastname = $("#editLastname").val();
    var firstname = $("#editFirstname").val();
    var address = $("#editAddess").val();
    var birth = $("#editBirth").val();

    updateUser(id, pseudo, lastname, firstname, address, birth, email)
    .then(function(data){
        swal("Success!", "Utilisateur Modifié", "success")
        .then((data) =>{
            location.reload();
        });
    });
}

function addUser(){
    var pseudo = $("#addPseudo").val();
    var email = $("#addEmail").val();
    var pwd = $("#addpwd").val();

    createUser(pseudo, pwd, email)
    .then(function(data){
        swal("Success!", "Utilisateur Ajouté", "success")
        .then((data) =>{
            location.reload();
        });
    }).catch(function(){
        swal("Error!", "Un probleme est survenue lors de la modification", "error");
    });
}