let Joueuractuel;
let content = "X"
let jeu = 1

function WinVerif(cases){
  let symbole = ["X","O"];
  for (let i =0 ; i<2 ; i++){
    // test sur les lignes
    if(
      cases[0].innerHTML == symbole[i] &&  
      cases[1].innerHTML == symbole[i] && 
      cases[2].innerHTML == symbole[i]){
        cases[0].style.backgroundColor = "#6eec94";
        cases[1].style.backgroundColor = "#6eec94";
        cases[2].style.backgroundColor = "#6eec94";
        return symbole[i];
      }
      
    if(
      cases[3].innerHTML == symbole[i] &&  
      cases[4].innerHTML == symbole[i] && 
      cases[5].innerHTML == symbole[i]){

        cases[3].style.backgroundColor = "#6eec94";
        cases[4].style.backgroundColor = "#6eec94";
        cases[5].style.backgroundColor = "#6eec94";
        return symbole[i];
      }

    if(
      cases[6].innerHTML == symbole[i] &&  
      cases[7].innerHTML == symbole[i] && 
      cases[8].innerHTML == symbole[i]){
        cases[6].style.backgroundColor = "#6eec94";
        cases[7].style.backgroundColor = "#6eec94";
        cases[8].style.backgroundColor = "#6eec94";
        return symbole[i];
      }
// test sur les colonnes
    if(
      cases[0].innerHTML == symbole[i] &&  
      cases[3].innerHTML == symbole[i] && 
      cases[6].innerHTML == symbole[i]){
        cases[0].style.backgroundColor = "#6eec94";
        cases[3].style.backgroundColor = "#6eec94";
        cases[6].style.backgroundColor = "#6eec94";
        return symbole[i];
      }

    if(
      cases[1].innerHTML == symbole[i] &&  
      cases[4].innerHTML == symbole[i] && 
      cases[7].innerHTML == symbole[i]){
        cases[1].style.backgroundColor = "#6eec94";
        cases[4].style.backgroundColor = "#6eec94";
        cases[7].style.backgroundColor = "#6eec94";
        return symbole[i];
      }

    if(
      cases[2].innerHTML == symbole[i] &&  
      cases[5].innerHTML == symbole[i] && 
      cases[8].innerHTML == symbole[i]){
        cases[2].style.backgroundColor = "#6eec94";
        cases[5].style.backgroundColor = "#6eec94";
        cases[8].style.backgroundColor = "#6eec94";
        return symbole[i];
      }
// test sur les diagonales
    if(
      cases[0].innerHTML == symbole[i] &&  
      cases[4].innerHTML == symbole[i] && 
      cases[8].innerHTML == symbole[i]){
        cases[0].style.backgroundColor = "#6eec94";
        cases[4].style.backgroundColor = "#6eec94";
        cases[8].style.backgroundColor = "#6eec94";
        return symbole[i];
      }

    if(
      cases[2].innerHTML == symbole[i] &&  
      cases[4].innerHTML == symbole[i] && 
      cases[6].innerHTML == symbole[i]){
        cases[2].style.backgroundColor = "#6eec94";
        cases[4].style.backgroundColor = "#6eec94";
        cases[6].style.backgroundColor = "#6eec94";
        return symbole[i];
      }
    }
}


function Draw(cases) {
  //test si les cases sont toutes remplies alors on renvoie false
  for (let i = 0; i < cases.length; i++) {
    if (cases[i].innerHTML.length == 0) 
      return false;
  }
  return true;
}

function ResetJeu(){
  //pour relancer le jeu à n'importe qu'elle moment de la partie
  jeu = 1;
  for(let i = 0 ;i< cases.length;i++){
    cases[i].innerHTML = "";
    cases[i].style.backgroundColor = "#FFFFFF";
  }
  content = "X";
  return 1;
}

let Afficheur = function(element) {
  let affichage = element;

  function setText(message) {
    affichage.innerHTML = message;
  }
  return { sendMessage: setText };
};


let cases = document.querySelectorAll(".case");
let btn = document.querySelector('button');


for(let i = 0 ;i< cases.length;i++)
{
  let aff = new Afficheur(document.querySelector("#AffJoueur"));
  aff.sendMessage("C'est au tour du Joueur " + content);

    cases[i].addEventListener("click",function() {

      if (cases[i].innerHTML == "" && jeu ==1) {

        cases[i].innerHTML = content;
        if (content == "X")
            content = "O";
        else
            content ="X";

        AffJoueur.style.backgroundColor="#d3d3d3";
        aff.sendMessage("C'est au tour du Joueur " + content);
      }
      else if (jeu == 1){
        AffJoueur.style.backgroundColor="#ff0000";
        aff.sendMessage("La case est déja remplie, Joueur " + content + ", rejouer svp");
      }



      if(WinVerif(cases)){
        aff.sendMessage("C'est gagné pour le Joueur " + WinVerif(cases));
        jeu = 0;
      }

      if(Draw(cases))
      {
        aff.sendMessage("Match Nul");
        jeu = 0;
      }

      btn.addEventListener('click',ResetJeu);
      
      })
      

};
