
let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));
let i;
for (i = min ; i<= max ; i++){
    if (i%3 ==0 && i%5 == 0)
        console.log(` ${i} is devided by THREE & FIVE`);
    else if (i%3 == 0 )
        console.log(`${i} is devided by THREE`);
    else if (i%5 == 0 )
        console.log(`${i} is devided by FIVE`);
    else
        console.log(`${i} is devided by none of three or five `)
}