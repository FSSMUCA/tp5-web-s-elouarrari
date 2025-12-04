
//Exercice 7:


function verifierMotDePasse(x){
  return  (x.length>=8 && mdp.includes("@"));
     
}
let mdp = prompt("veuillez entrer un mot de passe :");

if (verifierMotDePasse(mdp))
    console.log("Mot de passe valide");
else 
    console.log("Mot de passe non valide");