(function($) {
  "use strict";

  $('body').vide({
    mp4: "./media/index.mp4",
    poster: "./media/index.jpg"
  }, {
    posterType: 'jpg'
  });

})(jQuery);

function connectMe(){
    var email = $("#emailConnexion").val();
    var pwd = $("#pwdConnexion").val();
    var errrors = 0;
    
    var myUrl = ROUTE_USERS + "/connect/" + email + "/" + pwd;
    console.log(email + " " + pwd);
    
    $.ajax({
        url: myUrl,
        type: "GET",
    }).done(function(data){
        data = JSON.parse(data);
        if(data.res == true){
            $.ajax({
            url: "./connexionSessionSet.php",
            type: "POST",
            data: {pseudo : email},
            }).done(function(){
                document.location.href="./pages/dash.php"
            });
        } else {
            swal("Erreur", "Combinaison Pseudo / Mot de passe incorecte", "error");
        }
    });

}