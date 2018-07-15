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
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-11"><h3>Gestion des Matchs</h3></div>
                <button class="btn btn-secondary col-md-1" data-toggle="modal" data-target="#Add_Match_Modal">Ajouter</button>
                <div class="col-md-12"><table id="matchsTable"></table></div>
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

        <!-- SCRIPT LINK -->
        <!-- Bootstrap core JavaScript-->
        <script src="../js/lib/jquery.min.js"></script>
        <script src="../js/lib/popper.min.js"></script>
        <script src="../js/lib/bootstrap.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="../js/lib/sb-admin.min.js"></script>
        <script src="../js/lib/bootstrap-table.js"></script>
        <script src="../js/lib/sweetalert.js"></script>
        


        <script src="../js/config.js"></script>
        <script src="../js/api/match.js"></script>
        <script src="../js/table/matchTable.js"></script>

        <script src="../js/api/team.js"></script>
        <script src="../js/api/event.js"></script>
        <script src="../js/api/sport.js"></script>
        <script src="../js/app/match.js"></script>
        
    </body>
</html>


<div class="modal" id="Edit_Match_Modal" tabindex="-1" role="dialog">
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
            <div hidden id="editId"></div>
            <div class="button-group">
                <label>Sport :</label>
                <select class="custom-select" id="editSport">
                    <option selected>Choose...</option>
                  </select>
            </div><br>
            
            <div class="button-group">
                <label>Competition :</label>
                <select class="custom-select" id="editCompetition">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Date :</label>
                <input type="text" class="form-control text-center" id="editDate" placeholder="Ex : 2018-01-12" >
            </div><br>

            <div class="button-group">
                <label>Equipe 1 :</label>
                <select class="custom-select" id="editTeam1">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Equipe 2 :</label>
                <select class="custom-select" id="editTeam2">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Cote Equipe 1 :</label>
                <input type="text" class="form-control text-center" id="editCote1" placeholder="Cote1" >
            </div><br>

            <div class="button-group">
                <label>Cote Match Null :</label>
                <input type="text" class="form-control text-center" id="editCote2" placeholder="Cote2" >
            </div><br>

            <div class="button-group">
                <label>Cote Equipe 2 :</label>
                <input type="text" class="form-control text-center" id="editCote3" placeholder="Cote3" >
            </div><br>

            <div class="button-group">
                <label>Score</label>
                <input type="text" class="form-control text-center" id="editScore" placeholder="Score Ex : 1-2" >
            </div><br>


        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="editMatch()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




<div class="modal" id="Add_Match_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter un Match</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">

            <div class="button-group">
                <label>Sport :</label>
                <select class="custom-select" id="addSport">
                    <option selected>Choose...</option>
                  </select>
            </div><br>
            
            <div class="button-group">
                <label>Competition :</label>
                <select class="custom-select" id="addCompetition">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Date :</label>
                <input type="text" class="form-control text-center" id="addDate" placeholder="Ex : 2018-01-12" >
            </div><br>

            <div class="button-group">
                <label>Equipe 1 :</label>
                <select class="custom-select" id="addTeam1">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Equipe 2 :</label>
                <select class="custom-select" id="addTeam2">
                    <option selected>Choose...</option>
                  </select>
            </div><br>

            <div class="button-group">
                <label>Cote Equipe 1 :</label>
                <input type="text" class="form-control text-center" id="addCote1" placeholder="Cote1" >
            </div><br>

            <div class="button-group">
                <label>Cote Match Null :</label>
                <input type="text" class="form-control text-center" id="addCote2" placeholder="Cote2" >
            </div><br>

            <div class="button-group">
                <label>Cote Equipe 2 :</label>
                <input type="text" class="form-control text-center" id="addCote3" placeholder="Cote3" >
            </div><br>
            
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="addNewMatch()">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>