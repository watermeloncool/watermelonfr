
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
textefinal = textefinal.trimStart().slice(0, 80) + "...";

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

// technologies -----------------------------------------------------------------------
const mots = [

"ChatGPT",
"Llama",
"Qwen",
"Gemma",
"Claude",

"Python",
"Javascript",
"HTML",
"CSS",
"PHP",
"SQL",

"macOS",
"Android",
"iOS",
"Kotlin",
"SwiftUI",
"Windows",
"Linux",
"Ubuntu",

"WordPress",
"Shopify",
"Magento",
"PrestaShop",

"MongoDB",
"Google Apps Script"

];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let aleatoire = shuffle(mots);

const epaisseur = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];   
const taille = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39']; 
const transparence = ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']; 
const marge = ['5', '6', '7', '8', '9', '10']; 


for (let i = 0; i < aleatoire.length; i++) {
const epaisseuraleatoire = epaisseur[Math.floor(Math.random() * epaisseur.length)]; 
const taillealeatoire = taille[Math.floor(Math.random() * taille.length)]; 
const transparencealeatoire = transparence[Math.floor(Math.random() * transparence.length)]; 
const margealeatoire = marge[Math.floor(Math.random() * marge.length)];
document.getElementById('mots').innerHTML = document.getElementById('mots').innerHTML + '<div class="mot" style="font-weight:'+epaisseuraleatoire+'; font-size:'+taillealeatoire+'px; opacity:'+transparencealeatoire+'; margin:"'+margealeatoire+'px"; ">'+aleatoire[i]+'</div>';
}