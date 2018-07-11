<?php
session_start();
if($_SESSION['pseudo'] == null){
    header('Location: ../index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>BeYourBet</title>

        <link href="../css/lib/bootstrap.min.css" rel="stylesheet">
        <link href="../css/lib/sb-admin.css" rel="stylesheet">
        <link href="../css/lib/bootstrap-table.css" rel="stylesheet">

        <link href="../css/lib/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
    </head>

    <body class="fixed-nav sticky-footer bg-dark" id="page-top">
       
        <?php include("../nav.php"); ?>

        <div class="content-wrapper">
        <div class="container-fluid">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12"><h3>Classement des Joueurs</h3></div>
                <div class="col-md-12 datbody"></div>
            </div>
        </div>
        

        </div>
            <!-- /.container-fluid-->
            <!-- /.content-wrapper-->
            <footer class="sticky-footer">
                <div class="container">
                    <div class="text-center">
                        <small>Copyright © BeYourBet 2018</small>
                    </div>
                </div>
            </footer>

            <!-- Scroll to Top Button-->
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fa fa-angle-up"></i>
            </a>


        </div>

        <script src="../js/lib/jquery.min.js"></script>
        <script src="../js/lib/bootstrap.min.js"></script>
        <script src="../js/lib/sb-admin.js"></script>
        <script src="../js/lib/bootstrap-table.js"></script>
        <script src="../js/lib/sweetalert.js"></script>


        <script src="../js/config.js"></script>

        <script type="text/javascript">
          $.ajax({
             url : ROUTE_USERS + "/getUserClassement",
             type : 'GET',
             dataType : 'json',
          }).then(function(data){
            for(i = 0; i < data.length; i++){
              $(".datbody").append("<div>" + data[i].tokens + " - " + data[i].username + "</div>");
            }
          });
        </script>
        
    </body>
</html>
