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
                <div class="col-md-12"><h3>Gestion Utilisateurs</h3></div>
                <!--<button class="btn btn-secondary col-md-1" data-toggle="modal" data-target="#Add_User_Modal">Ajouter</button>-->
                <div class="col-md-12"><table id="usersTable"></table></div>
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
        <script src="../js/api/user.js"></script>
        <script src="../js/table/userTable.js"></script>
        
    </body>
</html>

<div class="modal" id="Bets_For_User" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Liste Paris de <span id="nameUserForBets"></span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="betUserBody"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal" id="Add_User_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter un Utilisateur</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">
            <div id="idUtilisateur" hidden></div>            
            
            <div class="button-group">
                <label>Pseudo :</label>
                <input type="text" class="form-control text-center" id="addPseudo" placeholder="Pseudo" >
            </div><br>

            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="addLastname" placeholder="Nom" >
            </div><br>

            <div class="button-group">
                <label>Prenom :</label>
                <input type="text" class="form-control text-center" id="addFirstname" placeholder="Prenom" >
            </div><br>

            <div class="button-group">
                <label>Adresse :</label>
                <input type="text" class="form-control text-center" id="addAddess" placeholder="Adresse" >
            </div><br>

            <div class="button-group">
                <label>Date de Naissance :</label>
                <input type="text" class="form-control text-center" id="addBirth" placeholder="Date de Naissance" >
            </div><br>
            
            <div class="button-group">
                <label>Mot de Passe :</label>
                <input type="text" class="form-control text-center" id="addpwd" placeholder="Mot de Passe" >
            </div><br>

            <div class="button-group">
                <label>Email :</label>
                <input type="text" class="form-control text-center" id="addEmail" placeholder="Email" >
            </div><br>
            
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="addUser()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal" id="Edit_User_Modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier un Utilisateur</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="button-group">
            <div id="idUtilisateur" hidden></div>            
            
            <div class="button-group">
                <label>Pseudo :</label>
                <input type="text" class="form-control text-center" id="editPseudo" placeholder="Pseudo" >
            </div><br>

            <div class="button-group">
                <label>Nom :</label>
                <input type="text" class="form-control text-center" id="editLastname" placeholder="Nom" >
            </div><br>

            <div class="button-group">
                <label>Prenom :</label>
                <input type="text" class="form-control text-center" id="editFirstname" placeholder="Prenom" >
            </div><br>

            <div class="button-group">
                <label>Adresse :</label>
                <input type="text" class="form-control text-center" id="editAddess" placeholder="Adresse" >
            </div><br>

            <div class="button-group">
                <label>Date de Naissance :</label>
                <input type="text" class="form-control text-center" id="editBirth" placeholder="Date de Naissance" >
            </div><br>

            <div class="button-group">
                <label>Email :</label>
                <input type="text" class="form-control text-center" id="editEmail" placeholder="Email" >
            </div><br>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="editUser()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>