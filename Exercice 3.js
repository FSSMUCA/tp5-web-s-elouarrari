//Exercice 3:

var nombre = prompt("veuillez entrer un nombre :");

if (nombre <0 )
    console.log("Nombre négatif");
else if (nombre >0 && nombre <= 10) 
    console.log("Petit"); 
 else if(nombre> 10 && nombre <= 50 )
    console.log("Moyen");
else if ( nombre> 50 && nombre <=100)
    console.log("Grand");
else if (nombre > 100)
    console.log("Très grand");
