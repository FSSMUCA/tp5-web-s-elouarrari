
//Exercice 6:

let Somme_Paire = 0;
let Somme_Impaire = 0;

for(i=0; i<=50; i++){
if (i%2==0)
    Somme_Paire+=i;
else
    Somme_Impaire+=i;
}
console.log(`La somme des nombres paires de 0 à 50 est : ${Somme_Paire}`);
console.log(`La somme des nombres impaires de 0 à 50 est : ${Somme_Impaire}`);
