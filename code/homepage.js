
/* titres --------------------------------------------------- */

var debut = 0;
var titres = document.getElementsByClassName("titre");
var nombre = titres.length;

function cacher(){
for(var i = 0; i < nombre; i++){titres[i].style.display = "none";}
}

function montrer(j,m){
setTimeout(function() {
cacher(); 
titres[j].style.display = "inline-block";
}, m);
}


setInterval(function() {
for(var j = 0; j < nombre; j++){ m = j*2500; montrer(j,m); }
}, nombre*2500);

for(var j = 0; j < nombre; j++){ m = j*2500; montrer(j,m); }

/* année ----------------------------------------------- */

var date = new Date();
var annee = date.getFullYear(); 
document.getElementById("annee").innerHTML = annee;


/* formulaire de contact ------------------------------ */

document.getElementById('monformulaire').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire.

    var scriptURL = "https://script.google.com/macros/s/AKfycbxMlS9sX55QlJWpKO34gfi7H9djKUTgCpSYbH88OdPhJH0n6pg1r8E3j15J3hOrF4qGCQ/exec";

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(this)
    })
    .finally(() => {
      // Ce code s'exécutera quelle que soit l'issue de la requête fetch
      document.getElementById('feedback').style.display = 'block';
    });
  });



/* clic sur #contact .form -----------------------------*/
/*
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'élément sur lequel vous voulez détecter le clic
    var contactFormTrigger = document.querySelector('#contact .form');
    
    // Ajoutez un écouteur d'événements de clic à cet élément
    contactFormTrigger.addEventListener('click', function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut si c'est un lien ou un bouton
      
      // Sélectionnez l'élément que vous souhaitez afficher
      var formElement = document.getElementById('form');
      
      // Changez le style de cet élément pour le rendre visible
      formElement.style.display = 'block';
  
      // Utilisez une courte temporisation avant de défiler pour s'assurer que le formulaire est visible
      setTimeout(function() {
        // Déclenche un défilement doux vers l'élément #contact
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      }, 0); // La temporisation peut être très courte, ici elle est mise à 0 millisecondes
    });
  });
  */