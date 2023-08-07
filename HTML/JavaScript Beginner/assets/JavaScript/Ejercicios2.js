//Ejercicio 1

function palabra (letters, ){
    return letters.length;
    
}

letras = 0;
letras = palabra("palindrome")
console.log(`palindrome tiene ${letras} letras`)


let pal = ["palíndrome"]
let other = [..."palíndrome"]
console.log(other)
// Ejercicio 2

let expr = ["no lemon, no melon"]
expr.reverse();
console.log(expr)

//Ejercicio 3

let ast = ["****"]

for (let index = 0; index < 4; index++) {
    console.log(ast)
    
}

//Ejercicio 4

let temperatura = [30, 30, 32, 36, 37, 33, 32];
temperatura.sort ((a,b) => a-b);
let median = (temperatura[(temperatura.length - 1) >> 1] + temperatura[temperatura.length >> 1]) / 2

console.log(median)

//Ejercicio 5

//  function stringManager (user, objeto) {
//  }
// let p = "Lorem ipsum dolor sit amet"
// let replace = prompt("Replace chars by signs?")
// let cap = prompt ("Capitalize?")
// let comas = prompt("Replace spaces with commas?")
// let respuesta;
// if (replace == "y") {
//     console.log(p.replace('a', '@'));
// }
// else if (replace == "n") {
//     console.log(p);
// }
// if (cap == "y") {
//     console.log(p.toUpperCase);
    
// }
// else if ( cap == "n") {
//     console.log(p);
// }
// if (comas == "y") {
//     console.log(p.replace(" ", ","));
    
// }else if ( comas == "n" ){
//         console.log(p);
// }


//Ejercicio 6
// function texto (sentence, words) {
   
//     return sentence.length;
// }

// pal = 0
// pal = texto("Lorem ipsum dolor sit amet")
// let space = 0
// space = texto.replaceAll(" ", "").length;


// console.log(`Length: ${pal}, Length without spaces: ${space}`)



//Ejercicio 7
function random (min, max) {
    console.log (Math.floor(Math.random() * max) + min);
}
let num = random(1, 10);

let errores = 0;

let guess = prompt ("Guess the number!")

if (guess == num )
{

    console.log("You win!")
}
else if( guess =! num) {

    console.log ("Try it again")
}
 for (let errores = 0; errores > 3; errores++) {
    
    console.log("Good luck in love")
 } 
 

//Ejercicio 8
