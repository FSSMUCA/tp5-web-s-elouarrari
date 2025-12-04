
// Exercice 8:

var totale = Number(prompt("Veuillez entrer le totale HT :"));
var remise = Number(prompt("Veuillez entrer la remise en % :"));

 function totalAvecRemise (totale, remise) {

    return (totale - (totale * remise/100));
}

totale_finale = totalAvecRemise(totale, remise);
console.log(`Le totale finale avec la remise est: ${totale_finale}.`);