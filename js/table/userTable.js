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
        
        jsonArray.push({
            id : allUsers[user].id,
            username : allUsers[user].username,
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
	return [
        '<center>',
        '<a class="modifyUser" title="Editer">',
	    '<span class="oi oi-pencil" aria-hidden="true"></span>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteUser" title="Supprimer">',
	    '<span class="oi oi-x" aria-hidden="true"></span>',
	    '</a></center>'
	].join('');
}

// Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyUser': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editPseudo").empty();
    	$("#editEmail").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#idUtilisateur").text(row.id);
    	$("#editPseudo").val(row.username);
    	$("#editEmail").val(row.email);
        
        if(row.admin == "Administrateur"){
            $("#editAdmin").prop('checked', true);
        }
        
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
    var admin;
    if($("#editAdmin").is(":checked")){
        admin = 1;
    } else {
        admin = 0;
    }
    updateUser(id, pseudo, email, admin)
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