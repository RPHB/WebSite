(function($) {
  "use strict";

  $('body').vide({
    mp4: "./media/index.mp4",
    poster: "./media/index.jpg"
  }, {
    posterType: 'jpg'
  });

})(jQuery);

/*
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
*/
function connectMe(){
    var email = $("#emailConnexion").val();
    var pwd = $("#pwdConnexion").val();
    var errrors = 0;
    
    /*
    if(!validateEmail(email)){
        errrors++;
    }
    
    if(pwd < 8){
        errrors++;
    }
    */
    var myUrl = ROUTE_USERS + "/connect/" + email + "/" + pwd;
    console.log(email + " " + pwd);
    
    $.ajax({
        url: myUrl,
        type: "GET",
    }).done(function(data){
        console.log(data);
        if(data == "true"){
            $.ajax({
            url: "./connexionSessionSet.php",
            type: "POST",
            data: {pseudo : email},
            }).done(function(){
                document.location.href="./pages/dash.php"
            });
        } else {
            alert("Combinaison Pseudo / Mot de passe incorecte");
            console.log("ko");
        }
    });

}