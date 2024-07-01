
// affichage titre -----------------------------------------------------------------------------------------------------------
const titre = document.querySelector('#dev .titre');
const texte = titre.innerHTML;
titre.innerHTML = '';
const vitesse = 50;
let i = 0;

function afficherLettreParLettre() {
  if (i < texte.length) {
    titre.innerHTML += texte.charAt(i);
    i++;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(afficherLettreParLettre, vitesse);

// articles -------------------------------------------------------------------------------------------------------------

const articlesContainer = document.getElementById('articles');
const articles = articlesContainer.getElementsByClassName('article');
    

for (let i = 0; i < articles.length; i++) {
const dataid = articles[i].getAttribute('data-id');
const url = '/articles/fr/'+dataid+'.html';

fetch(url)
.then(response => response.text())
.then(html => {

const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');

const titre = doc.getElementById("titre").textContent;

const date = doc.getElementById("date").textContent;

const image = doc.getElementById("image").src;

const texte = doc.querySelectorAll('p');
let textefinal = '';
texte.forEach(p => {  textefinal = textefinal + " " + p.textContent; });
textefinal = textefinal.trimStart().slice(0, 150) + "...";

// articles[i].innerHTML = '<a href="'+url+'"> <div class="gauche"><div class="titre">'+titre+'</div><div class="texte">'+textefinal+'</div><div class="date">'+date+'</div></div> <div class="image" style="background-image:url("'+imagesrc+'")"></div> </a>';
articles[i].innerHTML = '<a href="' + url + '"> <div class="gauche"><div class="titre">' + titre + '</div><div class="texte">' + textefinal + '</div><div class="date">' + date + '</div></div> <div class="image" style="background-image:url(\'' + image + '\')"></div> </a>';

})
.catch(error => console.error(`Erreur : ${error.message}`));

}


// cacher barre en dessous du dernier article ----------------------------------------
if (articles.length > 0) {
const dernierArticle = articles[articles.length - 1];
dernierArticle.style.border = 'none';
}


