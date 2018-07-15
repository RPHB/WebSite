getTeams().then(function(data){
	for(i = 0; i < data.length; i++){
		$("#addTeam1").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
		$("#addTeam2").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");

		$("#editTeam1").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
		$("#editTeam2").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
	}
});

getEvents().then(function(data){
	for(i = 0; i < data.length; i++){
		$("#addCompetition").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
		
		$("#editCompetition").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
	}
});

getSports().then(function(data){
	for(i = 0; i < data.length; i++){
		$("#addSport").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");

		$("#editSport").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
	}
});


