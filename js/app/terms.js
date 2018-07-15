function seeInformation(){
	var pseudo = $("#pseudoRGPD").val();
	var pwd = $("#pwdRGPD").val();

	if(verif() == 0){
		$.ajax({
			url: ROUTE_USERS + "/RGPDgive/" + pseudo + "/" + pwd,
			type: "GET",
			dataType : 'json',
		}).done(function(dataReturned){
			if(dataReturned != false){
				// User Data
				var userData = "Nom de Famille : " + dataReturned.user[0].lastname + ", ";
				userData += "Prenom : " + dataReturned.user[0].firstname + ", ";
				userData += "Pseudo : " + dataReturned.user[0].username + ", ";
				userData += "Adresse : " + dataReturned.user[0].address + ", "; 
				userData += "Date de Naissance : ";
				if(dataReturned.user[0].birth != null) 
					userData += dataReturned.user[0].birth.split("T")[0]+ ", " ;
				userData += "Email : " + dataReturned.user[0].email + ", ";
				userData += "Jetons : " + dataReturned.user[0].tokens + "<br><br>";

				// Bets Data
				var betData = "";
				for(i = 0; i < (dataReturned.bets).length; i++){
					if(dataReturned.bets[i].date != null){
						betData += dataReturned.bets[i].date.split("T")[0] + " ";
					}

					betData += dataReturned.bets[i].team1 + "-" + dataReturned.bets[i].team2 + " ";;

					if(dataReturned.bets[i].choice == 0)
						betData += "Equipe 1 ";
					if(dataReturned.bets[i].choice == 1)
						betData += "Match Null ";
					if(dataReturned.bets[i].choice == 2)
						betData += "Equipe 2 ";

					if(dataReturned.bets[i].sport == 0)
						betData += "FootBall ";
					if(dataReturned.bets[i].sport == 1)
						betData += "Rugby ";
					if(dataReturned.bets[i].sport == 2)
						betData += "HandBall ";
					if(dataReturned.bets[i].sport == 3)
						betData += "Basket ";


					betData += dataReturned.bets[i].tokens + " ";

					if(dataReturned.bets[i].isWin == 0)
						betData += "Perdu ";
					if(dataReturned.bets[i].isWin == 1)
						betData += "Gagné ";


					betData += "<br>";

				}
				$("#userData").html(userData);
				$("#betsData").html(betData);
				$("#ViewData").modal('show');
			} else
				swal("Error!", "Aucune Information n'a ete trouvées", "error");
		});
	}

}


function deleteInformation(){
	var pseudo = $("#pseudoRGPD").val();
	var pwd = $("#pwdRGPD").val();

	swal({
      title: "Etes-vous sûr de vouloir supprimer les données vous concernant ?",
      text: "Une fois supprimées vous ne pourrez plus vous connecter et jouer, Votre compte et tous vos paris seront effacés",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      	if(verif() == 0){
			$.ajax({
				url: ROUTE_USERS + "/RGPDdelete/" + pseudo + "/" + pwd,
				type: "GET",
			}).done(function(dataReturned){
				console.log(dataReturned);
				if(dataReturned != "false"){
					swal("Success!", "Vos données sont supprimées", "success");
				} else
					swal("Error!", "Aucune Information n'a ete trouvées", "error");
			});
		}
      } else {
        swal("OK !","Vos données sont sauve !", "success");
      }
    });

	

}







function verif(){
	if(($("#pseudoRGPD").val()).length < 1 || ($("#pwdRGPD").val()).length < 1){
		swal("Erreur", "Combinaison Pseudo / Mot de passe incorecte", "error");
		return 1;
	} else {
		return 0;
	}
}