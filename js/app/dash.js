getAllUsersNumber();
getAllBetsNumber();
getAllMatchsNumber();
getAllBets();
getAllBetsByDate();



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
		var nbdate = [];
		var label = []
		for(i = 0; i < data.length; i++){
			var exist = 0;
			var elementDate = data[i].date.split('T')[0];
			for(j = 0; j < label.length; j++){
				if(label[j] == elementDate){
					nbdate[j]++;
					exist++;
				}
			}
			if(exist == 0){
				label.push(elementDate);
				nbdate.push(1);
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