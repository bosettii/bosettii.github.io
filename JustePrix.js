const NbJoueur = document.getElementById("Inp_Valeur");
let max = document.getElementById("BorneSup");
let btnBs=document.getElementById("Bs");
let btnver = document.getElementById("btnver");
let Comptxt = document.getElementById("Comp");
let Compteur=0; // Comptre le nombre coups du joueur


let res=document.getElementById("Resultat"); // Va permettre d'afficher plus,moins,Trouver
let Nb_a_Trouver;
max.addEventListener("keypress", function(e)
{
    if(e.key == "Enter")
    {
    Verif(max.value);
    Generateur_Nb_Ale();
    }
})
btnBs.addEventListener("click",Generateur_Nb_Ale);
btnver.addEventListener("click",Verif);
btnver.addEventListener("click",Trouver);
NbJoueur.addEventListener("keypress", function(e)
{
    if(e.key == "Enter")
    {
    Verif(NbJoueur.value);
    Trouver();
    }
})
console.log(Nb_a_Trouver);
let NbJoueur2;
function Verif(Nb)
{
    //Verifie qu'il s'agit dun nombre
    
    if(parseFloat(Nb))
    {
    }
    else
    {
        alert("La valeur rentre n'est pas un nombre entier");
    }
}

function Generateur_Nb_Ale()
{
    let maxval=parseFloat(max.value);
    console.log("Maxval " + maxval)
    Nb_a_Trouver= Math.floor( Math.random() * (maxval))+1;
    Compteur = 0;
    Comptxt.innerText="Compteur:"+ Compteur
    console.log(Nb_a_Trouver)
}

function Trouver()
{
    NbJoueur2=parseFloat(NbJoueur.value);
    console.log(NbJoueur2);
    //Va Verifier si nous somme = a notre valeur rechercher
    if(NbJoueur2 >Nb_a_Trouver)
    {
        res.innerText ="Moins";
        Compteur++;
        Comptxt.innerText="Compteur:"+ Compteur
    }
    else if(NbJoueur2 < Nb_a_Trouver)
    {
        res.innerText="Plus";
        Compteur++;
        Comptxt.innerText="Compteur:"+ Compteur
    }
    else if(NbJoueur2 == Nb_a_Trouver)
    {
        Compteur++;
        Comptxt.innerText="Compteur:"+ Compteur
        res.innerText="GG ta trouver la solution, tu l'as trouve en "+ Compteur +" coups";
    }
    else if(isNaN(NbJoueur2))
    {
        res.innerText= "La valeur n'est pas un entier ";
        Compteur++;
        Comptxt.innerText="Compteur:"+ Compteur
    }

}


/* Valider avec touche entree
*/
