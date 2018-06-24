<?php
session_start();
if($_SESSION['pseudo'] != null){
header('Location: ./pages/dash.php');
exit;
}
?>

<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>BeYourBet</title>

        <link href="css/lib/bootstrap.min.css" rel="stylesheet">
        <link href="css/app/index.css" rel="stylesheet">

    </head>

    <body>
        <div id="overlay"></div>

        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4" id="loginPanelConnexion">
                <h3 style="width: 130px; margin: auto;">Connexion</h3><br>
                <input type="text" class="form-control" id="emailConnexion" placeholder="Pseudo"><br>
                <input type="password" class="form-control" id="pwdConnexion" placeholder="Mot de passe"><br>
                <div style="width: 75px; margin: auto;"><button class="btn btn-info" onclick="connectMe()">Valider</button></div>
            </div>
            <div class="col-md-4"></div>
        </div>

        <script src="js/lib/jquery.min.js"></script>
        <script src="js/lib/bootstrap.min.js"></script>
        <script src="js/lib/jquery.vide.min.js"></script>
        <script src="js/lib/sweetalert.js"></script>



        <script src="js/config.js"></script>
        <script src="js/app/index.js"></script>
    </body>

</html>
