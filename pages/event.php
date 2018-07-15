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
          <div class="row">

            <div class="col-md-6">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-10"><h3>Gestion des Évènements</h3></div>
                  <button class="btn btn-secondary col-md-2" data-toggle="modal" data-target="#Add_Event_Modal">Ajouter</button>
                  <div class="col-md-12"><table id="eventsTable"></table></div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-10"><h3>Gestion des Sports</h3></div>
                  <button class="btn btn-secondary col-md-2" data-toggle="modal" data-target="#Add_Sport_Modal">Ajouter</button>
                  <div class="col-md-12"><table id="sportsTable"></table></div>
                </div>
              </div>
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
        <script src="../js/lib/popper.min.js"></script>
        <script src="../js/lib/bootstrap.min.js"></script>
        <script src="../js/lib/sb-admin.js"></script>
        <script src="../js/lib/bootstrap-table.js"></script>
        <script src="../js/lib/sweetalert.js"></script>


        <script src="../js/config.js"></script>
        <script src="../js/api/event.js"></script>
        <script src="../js/table/eventTable.js"></script>

        <script src="../js/api/sport.js"></script>
        <script src="../js/table/sportTable.js"></script>
        
    </body>
</html>



<div class="modal" id="Add_Event_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter un Évènement</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">          
            
            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="addName" placeholder="Nom de l'évènement" >
            </div><br>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="addEvent()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="Edit_Event_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier un évènement</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">
        <div id="idEvent" hidden></div>            
            
            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="editName" placeholder="Nom de l'évènement" >
            </div><br>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="editEvent()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<div class="modal" id="Add_Sport_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter un Sport</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">         
            
            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="addSportName" placeholder="Nom du Sport" >
            </div><br>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="addSport()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal" id="Edit_Sport_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier un Sport</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">
        <div id="idSport" hidden></div>            
            
            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="editSportName" placeholder="Nom du Sport" >
            </div><br>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="editSport()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>