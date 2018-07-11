getAllUsersNumber();
getAllBetsNumber();
getAllMatchsNumber();
getAllBets();
getAllBetsByDate();
getAllBetsByDateForTokens();



function getAllUsersNumber(){
	var myUrl = ROUTE_STATISTICS + "/getAllUsersNumber";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
	    $('#numberOfUsers').text(data["count(*)"]);
	});
}


function getAllBetsNumber(){
	var myUrl = ROUTE_STATISTICS + "/getAllBetsNumber";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
	    $('#numberOfBets').text(data["count(*)"]);
	});
}

function getAllMatchsNumber(){
	var myUrl = ROUTE_STATISTICS + "/getAllMatchsNumber";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
	    $('#numberOfMatch').text(data["count(*)"]);
	});
}

function getAllBets(){
	var myUrl = ROUTE_STATISTICS + "/getAllBetsBySport";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
		var sum = [0,0,0,0];
		for(i = 0; i < data.length; i++){
			sum[data[i].sport] ++;
		}
		var ctx = document.getElementById("betBySport").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: {
		        labels: ["FootBall", "Rugby", "HandBall", "Basket"],
		        datasets: [{
		            data: sum,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)'
		            ],
		            borderWidth: 1
		        }]
		    }
		});
	});
}

function getAllBetsByDate(){
	var myUrl = ROUTE_STATISTICS + "/getAllBetsDate";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
		var DateVar = new Date();
		DateVar.setDate(DateVar.getDate()-10);

		var nbdate = [];
		var label = [];

		//Liste Date des 10 dernier Jour
		for(i = 0; i < 10; i++){
			var dateYear = DateVar.getFullYear();
			var dateMonth = DateVar.getMonth() + 1;
			var dateDay = DateVar.getDate();

			var DateStart = dateYear+"-";
			if(dateMonth.toString().length == 1){
				DateStart += "0";
			}
			DateStart +=  dateMonth + "-";
			if(dateDay.toString().length == 1){
				DateStart += "0";
			}
			DateStart +=  dateDay;
			label.push(DateStart);
			nbdate.push(0);
			DateVar.setDate(DateVar.getDate()+1);
		}
		
		for(i = 0; i < data.length; i++){
			var elementDate = data[i].date.split('T')[0];
			for(j = 0; j < label.length; j++){
				if(label[j] == elementDate){
					nbdate[j]++;
				}
			}
		}

		var ctx = document.getElementById("betByDate").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: label,
		        datasets: [{
		            label: 'Nombre de Paris',
		            data: nbdate,
		            backgroundColor: 'rgba(54, 162, 235, 0.2)',
		            borderColor: 'rgba(54, 162, 235, 1)',
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

	});
}

function getAllBetsByDateForTokens(){
	var myUrl = ROUTE_STATISTICS + "/getAllBetsDate";
	$.ajax({
	    url: myUrl,
	    type: "GET"
	}).done(function(data){
		var DateVar = new Date();
		DateVar.setDate(DateVar.getDate()-10);

		var nbdate = [];

		var label = [];

		//Liste Date des 10 dernier Jour
		for(i = 0; i < 10; i++){
			var dateYear = DateVar.getFullYear();
			var dateMonth = DateVar.getMonth() + 1;
			var dateDay = DateVar.getDate();

			var DateStart = dateYear+"-";
			if(dateMonth.toString().length == 1){
				DateStart += "0";
			}
			DateStart +=  dateMonth + "-";
			if(dateDay.toString().length == 1){
				DateStart += "0";
			}
			DateStart +=  dateDay;
			label.push(DateStart);
			nbdate.push(0);
			DateVar.setDate(DateVar.getDate()+1);
		}
		
		for(i = 0; i < data.length; i++){
			var elementDate = data[i].date.split('T')[0];
			for(j = 0; j < label.length; j++){
				if(label[j] == elementDate){
					if(data[i].isPayed == 1 && data[i].isWin == 0){
						nbdate[j] += data[i].tokens;
					}

					if(data[i].isPayed == 1 && data[i].isWin == 1){
						nbdate[j] -= data[i].tokens;
					}

				}
			}
		}

		var ctx = document.getElementById("tokensWinAndLost").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'line',
		    fill: false,
		    data: {
		        labels: label,
		        datasets: [{
		            label: 'Rapport Jetons Gagné Perdu',
		            data: nbdate,
		            backgroundColor: 'rgba(54, 162, 235, 0.2)',
		            borderColor: 'rgba(54, 162, 235, 1)',
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

	});
}


function setGift(){
	var tks = $("#giftTokens").val();
	if(tks > 0){
		$.ajax({
		    url: ROUTE_USERS + "/setGift/" + tks,
		    type: "post"
		}).done(function(data){
		    swal("OK !","Jetons donnée au joueurs !", "success");
		});
	} else {
		swal("ERREUR !","Montant non valide!", "error");
	}
}