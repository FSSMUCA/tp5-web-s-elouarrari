
//Exercice 9:

function  factorielle(n){
    if (n==0){
        return 1;
    }
    else 
        return n*factorielle(n-1);
}
console.log (factorielle(5));//exemple avec n =5 -> 120 