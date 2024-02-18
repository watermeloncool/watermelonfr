/* menu --------------------------------------------------- */
const menumobile = document.getElementById('menumobile');
const sousmenumobile = document.getElementById('sousmenumobile');
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click', function() {
menumobile.style.display = 'none';
sousmenumobile.style.display = 'block';
});

closebtn.addEventListener('click', function() {
  menumobile.style.display = 'block';
  sousmenumobile.style.display = 'none';
});

/* derouler ---------------------------------------------- */
document.querySelectorAll('.derouler .top').forEach(function(derouler) {
  derouler.addEventListener('click', function() {
    let parent = this.parentElement;
      let contenu = parent.querySelector('.contenu');
      let montrer = parent.querySelector('.montrer');
      let cacher = parent.querySelector('.cacher');
      if (contenu.style.display === "none" || contenu.style.display === "") {
          contenu.style.display = "block";
          cacher.style.display = "inline-block";
          montrer.style.display = "none";
      } else {
          contenu.style.display = "none"; // Optionnel: cache le contenu si on clique à nouveau
          cacher.style.display = "none";
          montrer.style.display = "inline-block";
      }
  });
});

/* estimateur ---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const estimateur = document.getElementById('estimateur');
  const groupesReponses = estimateur.querySelectorAll('.reponses');

  groupesReponses.forEach(groupe => {
      const reponses = groupe.querySelectorAll('.reponse');

      reponses.forEach(reponse => {
          reponse.addEventListener('click', function() {
              // Si l'élément cliqué n'a pas déjà la classe 'selected', retirer 'selected' des autres éléments du même groupe
              if (!this.classList.contains('selected')) {
                  reponses.forEach(el => el.classList.remove('selected'));
              }
              // Basculer la classe 'selected' pour l'élément cliqué
              this.classList.toggle('selected');

              // Recalculer le total pour tous les éléments sélectionnés dans tous les groupes
              let total = 0;
              estimateur.querySelectorAll('.reponses .reponse.selected').forEach(selected => {
                  total += Number(selected.getAttribute('data-prix') || 0);
              });

              // Mettre à jour le total
              const chf = estimateur.querySelector('.chf');
              if (chf) { chf.textContent = total.toLocaleString('fr-CH').replace(/\s/g, "'"); }
          });
      });
  });
});





/* copyright année ------------------------------------------ */
var date = new Date();
var annee = date.getFullYear(); 
document.getElementById("annee").innerHTML = annee;

/* contact ------------------------------ */
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire.

  var scriptURL = "https://script.google.com/macros/s/AKfycbwfBV-WbnLDkGJWVRTTiHiUpCx_CtF2bp7smFquOuBbyx4tjcjimh71Eev3oi3q-rhDRQ/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(this)
  })
  .finally(() => {
    // Ce code s'exécutera quelle que soit l'issue de la requête fetch
    document.querySelector('#form .btn').style.display = 'none';
    document.querySelector('.feedback').style.display = 'inline-block';
  });
});


