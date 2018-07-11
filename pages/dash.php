<?php
session_start();
if($_SESSION['pseudo'] == null){
    header('Location: ../index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>BeYourBet</title>

  <link href="../css/lib/bootstrap.min.css" rel="stylesheet">
  <link href="../css/lib/sb-admin.css" rel="stylesheet">

  <link href="../css/lib/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
  
  <?php include("../nav.php"); ?>
    
  <div class="content-wrapper">
    <div class="container-fluid">
      


      <div class="row">
        <div class="col-lg-3">
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-area-chart"></i> Nombre d'Utilisateurs</div>
            <div class="card-body text-center" style="font-size: 20px;">
              <p id="numberOfUsers" width="100%"></p>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-area-chart"></i> Nombre de Paris</div>
            <div class="card-body text-center" style="font-size: 20px;">
              <p id="numberOfBets" width="100%"></p>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-area-chart"></i> Nombre de Matchs</div>
            <div class="card-body text-center" style="font-size: 20px;">
              <p id="numberOfMatch" width="100%"></p>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-area-chart"></i> Donner des Jetons Aux Joueurs</div>
            <div class="card-body text-center" style="font-size: 20px;">
              <div class="row">
                <div class="col-lg-8">
                  <input type="text" class="form-control col-lg-12" id="giftTokens">
                </div>
                <div class="col-lg-4">
                  <button type="button" class="btn btn-info col-lg-12" onclick="setGift()">Gift</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>


        
      <div class="row">
        <div class="col-lg-8">
          <!-- Example Bar Chart Card-->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-bar-chart"></i> Nombre de Paris sur les 10 Derniers Jours</div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-8 my-auto">
                  <canvas id="betByDate" width="100%"></canvas>
                </div>
              </div>
            </div>
          </div>

          <!-- Example Bar Chart Card-->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-bar-chart"></i> Rapport Jetons Gagné et Perdu</div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-8 my-auto">
                  <canvas id="tokensWinAndLost" width="100"></canvas>
                </div>
              </div>
            </div>
          </div>

          
          <!-- /Card Columns-->
        </div>
        <div class="col-lg-4">
          <!-- Example Pie Chart Card-->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-pie-chart"></i> Pourcentage Paris/Sport</div>
            <div class="card-body">
              <canvas id="betBySport" width="100%" height="100"></canvas>
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
      
    <!-- Bootstrap core JavaScript-->
    <script src="../js/lib/jquery.min.js"></script>
    <script src="../js/lib/bootstrap.min.js"></script>
    <script src="../js/lib/sb-admin.min.js"></script>
    <script src="../js/lib/chart.js"></script>
    <script src="../js/lib/sweetalert.js"></script>

    <script src="../js/config.js"></script>
    <script src="../js/app/dash.js"></script>

  </div>
</body>

</html>
