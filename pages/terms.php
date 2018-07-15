<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>BeYourBet</title>

        <link href="../css/lib/bootstrap.min.css" rel="stylesheet">
        <link href="../css/app/terms.css" rel="stylesheet">
    </head>

    <body ><br>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 corps">
                <div class="row">
                    <h2 class="col-md-12 text-center">Politique d'utilisation des données<br><br></h2>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <h3>1 - Collecte des données</h3>

BeYourBet collecte des données personnelles concernant les utilisateurs à plusieurs moments durant l'utilisation de l'application :

<ul>
    <li>Lors de <b>la création du compte utilisateur</b></li>
    <li>Lors de <b>la mise en place d'un pari par un utilisateur connecté</b></li>
</ul>

Dans le premier cas, les informations retenues sont ceux demandés dans le formulaire d'inscription,
nécessaire à l'utilisation de l'application, à savoir : le nom d'utilisateur (login), le mot de passe et l'adresse e-mail.
Le nom, le prénom, l'adresse ainsi que la date de naissance sont des informations quant à elles purement non obligatoires et peuvent être remplis ou non
selon la volonté de l'utilisateur de l'application.

Dans le second cas, les informations concernent les caractéristiques de chaque pari effectué par un utilisateur:
le choix de l'équipe de l'issue du match (victoire de l'équipe à domicile, victoire de l'équipe extérieure, match nul),
ainsi que le montant dudit pari (nombre de jetons misés).

<h3>2 - Utilisation des données</h3>

<h4>Création du profil utilisateur</h4>

L'intérêt de BeYourBet dans la collecte de certaines d'informations comme votre identifiant, votre mot de passe
ainsi que certaines de vos coordonnées comme votre adresse e-mail, est de pouvoir établir un profil vous représentant.
Ce profil a pour but dans un premier temps de vous reconnaitre en tant qu'utilisateur unique afin de vous différencier des
autres personnes. Il a également pour but de restreindre l'accès à vos informations aux autres utilisateurs et de permettre à
BeYourBet de pouvoir vous contacter autrement que par l'intermédiaire de l'application afin de vous envoyer des messages.
C'est notamment via ce procédé qu'un mail pour la récupération de votre mot de passe peut vous être envoyé.

<h4>Établissement de mesures statistiques</h4>

Dans le cadre du fonctionnement de l'application, BeYourBet collecte les informations de chaque utilisateur notamment les paris
effectués. BeYourBet utilise également ces données dans le cadre d'établissement de statistiques.
Ces mesures sont effectuées à titre purement informationnel et ne sont partagées avec personne d'autre, aucune autre organisation /
association / entité publique.

<h3>3 - Droit de l'utilisateur sur les données collectées</h3>

L'utilisateur est en droit comme l'indique l'article 16 de la loi RGPD mis en application depuis le 25 mai 2018 de demander
un listage exhaustif des données faisant l'objet d'un traitement par l'application BeYourBet. Ce listage peut être demandé à tout moment
par un utilisateur connecté à l'application.

L'application permet également, comme l'indique l'article 17 de la RGPD, un droit à l'effacement / droit à l'oubli des informations
collectées sur l'utilisateur. Par ce procédé toute information collectée par le biais de l'utilisation de l'application peut être détruite
à la demande de l'utilisateur quand il le souhaite.

<h3>4 - Mentions Légales</h3>

Le site et l'application BeYourBet sont édités par le Projet Annuel - GROUPE 1 - ESGI (SOLDE, FARAULT, LANGLOIS).<br>
<ul>
    <li>Siège social : 242 Rue du Faubourg Saint-Antoine, 75012 Paris</li>
    <li>Société Fondée en 2018</li>
    <li>Capital social : 0 €</li>
</ul>
Le site est hébergé dans les locaux de BeYourBet
                        </div>
                    </div>

                    <div class="col-md-6 text-center">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <h4>Pour recuperer vos informations ou les supprimer, Veuillez saisir vous identifiant et cliquer sur l'action souhaitée.<br><br></h4>
                                    <input type="text" class="form-control" id="pseudoRGPD" placeholder="Pseudo"><br>
                                    <input type="password" class="form-control" id="pwdRGPD" placeholder="Mot de passe"><br>
                                    <div>
                                        <button class="btn btn-info" onclick="seeInformation()">Voir Mes Infos</button>
                                        <button class="btn btn-info" onclick="deleteInformation()">Supprimer mes Infos</button>
                                    </div>
                                </div>
                                <div class="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div class="col-md-1"></div>
        </div>
        

        <script src="../js/lib/jquery.min.js"></script>
        <script src="../js/lib/bootstrap.min.js"></script>
        <script src="../js/lib/sweetalert.js"></script>
        

        <script src="../js/config.js"></script>
        <script src="../js/app/terms.js"></script>
        
    </body>
</html>




<div class="modal" id="ViewData" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Voici Vos Informations</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div id="userData"></div>
                <div id="betsData"></div>
            </div>
            <div class="col-md-1"></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>






