const NbJoueur = document.getElementById("Inp_Valeur");
let max = document.getElementById("BorneSup");
let btnBs=document.getElementById("Bs");
let btnver = document.getElementById("btnver");
let Comptxt = document.getElementById("Comp");
let Compteur=0; // Compte le nombre coups du joueur


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
btnver.addEventListener("click",Trouver);
NbJoueur.addEventListener("keypress", function(e)
{
    if(e.key == "Enter")
    {
    Trouver();
    }
})
let NbJoueur2;

function Generateur_Nb_Ale()
{
    let maxval=parseFloat(max.value);
    
    Nb_a_Trouver= Math.floor( Math.random() * (maxval))+1;
    Compteur = 0;
    Comptxt.innerText="Compteur:"+ Compteur
    
}

function Trouver()
{
    NbJoueur2=parseFloat(NbJoueur.value);
    
    //Va Verifier si nous somme égale à notre valeur rechercher
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
        res.innerText="GG ta trouver la solution, tu l'as trouve en "+ Compteur +" coups pour recommencer appuie sur acceptation";
    }
    else if(isNaN(NbJoueur2))
    {
        res.innerText= "La valeur n'est pas un entier ";
        Compteur++;
        Comptxt.innerText="Compteur:"+ Compteur
    }

}

