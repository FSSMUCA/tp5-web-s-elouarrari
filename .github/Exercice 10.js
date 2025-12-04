
//Exercice 10:

function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    // Cas de base (ou condition d'arrêt)
    if (n === 0) {
        return 0;
    } 
    // Cas récursif
    else {
        return n + sommeRecursive(n - 1);
    }
}

//qst1 
console.log("Q1 : L'approche itérative est souvent considérée comme plus lisible pour cette tâche simple, car elle reflète une logique séquentielle facile à suivre sans nécessiter de gérer la pile d'appels.");
//qst2
console.log("Q2 : L'approche itérative est généralement plus performante en JavaScript car elle évite la surcharge de mémoire et de temps liée à la création et à la gestion des multiples cadres d'exécution dans la pile d'appels inhérente à la récursion.");
//qst3
console.log ("Q3 : Oui, la récursion peut causer un débordement de la pile d'appels (Stack Overflow) si le nombre d'appels est trop grand ou si la condition d'arrêt est manquante, épuisant ainsi la mémoire allouée à la pile.");
//qst 4
console.log("Q4 :Il faut privilégier une boucle pour les problèmes linéaires simples et pour les traitements impliquant de très grands nombres d'itérations afin de garantir une meilleure performance et d'éviter un risque de Stack Overflow.");
