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
        <!-- Bootstrap core CSS-->
        <link href="../css/lib/bootstrap.min.css" rel="stylesheet">
        <link href="../css/lib/sb-admin.css" rel="stylesheet">
        <link href="../css/lib/bootstrap-table.css" rel="stylesheet">

        <link href="../css/lib/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
    </head>

    <body class="fixed-nav sticky-footer bg-dark" id="page-top">
       
        <?php include("../nav.php"); ?>

        <div class="content-wrapper">
        <div class="container-fluid">

        <table id="matchsTable"></table>

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

        <!-- SCRIPT LINK -->
        <!-- Bootstrap core JavaScript-->
        <script src="../js/lib/jquery.min.js"></script>
        <script src="../js/lib/bootstrap.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="../js/lib/sb-admin.min.js"></script>
        <script src="../js/lib/bootstrap-table.js"></script>


        <script src="../js/config.js"></script>
        <script src="../js/api/match.js"></script>
        <script src="../js/table/matchTable.js"></script>
        
    </body>
</html>



<div class="modal" id="Add_Match_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier un Match</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">
            <label>Date :</label>
                <input type="text" class="form-control text-center" id="editDate" placeholder="Date">             
            </div><br>

            <div class="button-group">
                <label>Match :</label>
                <input type="text" class="form-control text-center" id="editMatch" placeholder="Match" >
            </div><br>

            <div class="button-group">
                <label>Score :</label>
                <input type="text" class="form-control text-center" id="editScore" placeholder="Score" >
            </div><br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>