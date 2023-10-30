
/* TITRES */

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

/* ANNÉE */

var date = new Date();
var annee = date.getFullYear(); 
document.getElementById("annee").innerHTML = annee;