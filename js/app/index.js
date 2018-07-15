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
    var pseudo = $("#emailConnexion").val();
    var pwd = $("#pwdConnexion").val();

    if(pseudo.length > 0 && pwd.length > 0){
    
        var myUrl = ROUTE_USERS + "/webconnect/" + pseudo + "/" + pwd;
        
        $.ajax({
            url: myUrl,
            type: "GET",
        }).done(function(returndata){
            if(returndata == "true"){
                $.ajax({
                url: "./connexionSessionSet.php",
                type: "POST",
                data: {pseudo : pseudo},
                }).done(function(dataReturned){
                    document.location.href="./pages/dash.php"
                });
            } else {
                swal("Erreur", "Combinaison Pseudo / Mot de passe incorecte", "error");
            }
        });
    } else {
        swal("Erreur", "Combinaison Pseudo / Mot de passe incorecte", "error");
    }

}