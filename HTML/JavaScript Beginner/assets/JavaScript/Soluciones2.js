//Ejercicio 1

// const exercise1 = () => {
//     let text = "palindrome";
//     for (let number = 0; number <= text.length - 1; number++) {
//         console.log(`${number + 1}. ${text[number]}`);
//     }
//     console.log("Letters quantity: ", text.length);
// }
// function palabra (letters, ){
//     return letters.length;
    
// }

// letras = 0;
// letras = palabra("palindrome")
// console.log(`palindrome tiene ${letras} letras`)


// let pal = ["palíndrome"]
// let other = [..."palíndrome"]
// console.log(other)

// Ejercicio 2
// const exercise2 = () => {
//     let palindrome = "no lemon, no melon";
//     let invertedPalindrome = "";

//     for (let i = palindrome.length - 1; i >= 0; i--) {
//         invertedPalindrome += palindrome[i];
//     }
//     console.log(invertedPalindrome);
// }

// //Ejercicio 3
// const exercise3 = () => {

//     let asterisks = "";
//     for (let i = 0; i < 4; i++) {
//         asterisks += "****\n";
//     }
//     console.log(asterisks);
// }

// //Ejercicio 4
// const exercise4 = () => {
//     let mediaTemp = 0;
//     let counter = 0;
//     for (
//         let i = 18,
//         mar18 = 17,
//         mar19 = 17,
//         mar20 = 16,
//         mar21 = 14,
//         mar22 = 17,
//         mar23 = 15,
//         mar24 = 14;
//         i < 25;
//         i++, counter++
//     ) {
//         mediaTemp += eval(`mar${i}`);
//     }
//     console.log("7-Day Average Temperature: ", mediaTemp / counter);
// }
//Ejercicio 5
// const exercise5 = () => {
//     let startTime = 0, endTime = 0, startTime2 = 0, endTime2 = 0, words = 0, chars = 0
//     let response = "";
//     let questions = [
//         "Replace chars by signs?",
//         "Capitalize?",
//         "Replace spaces with commas?"
//     ];
//     let options = {
//         replaceChars: false,
//         capitalize: false,
//         replaceSpaces: false,
//     };
//     let string = "";
//     do {
//         string = prompt('Please, enter your string').trim();
//     } while (!string || string.length == 0);
//     words = string.split(" ").length
//     chars = [...string].length
//     for (let index = 0; index < questions.length; index++) {
//         do {
//             response = prompt(questions[index]).trim()
//             console.log(response);
//             switch (index) {
//                 case 0:
//                     options.replaceChars = response == 'y' ?? false;
//                     break;
//                 case 1:
//                     options.capitalize = response == 'y' ?? false;
//                     break;
//                 case 2:
//                     options.replaceSpaces = response == 'y' ?? false;
//                     break;
//             }
//         } while (!response || response.length == 0 || !(/y|n/i.test(response)));

//     }
//     startTime = performance.now()
//     console.time("work done in ")
//     startTime2 = new Date().getTime();
//     stringManager(string, options)
//     endTime = performance.now()
//     console.log(`${words} words, ${chars} chars`);
//     console.timeEnd("work done in ")
//     endTime2 = new Date().getTime();
//     console.log(`with performance: ${endTime - startTime} ms`);
//     console.log(`with Date(): ${endTime2 - startTime2} ms`);
// }
// //Ejercicio 6
// const exercise6 = () => {
//     let string = "";
//     let words = 0, chars = 0;
//     let stats = {
//         stringLength: 0,
//         cleanStringLenght: 0,
//         words: 0,
//         uniqueWords: 0,
//         uniqueWordsPercentage: 0,
//         minWordLenght: 0,
//         maxWordLenght: 0,
//         averageWordLenght: 0,
//     }
//     do {
//         string = prompt('Please, enter your string').trim();
//     } while (!string || string.length == 0);
//     // strip all punctuation from string
//     let cleanString = string.replace(/[,.!]/g, '');

//     // separate string into array of lowercase words
//     words = cleanString.toLowerCase().split(' ');

//     // form object of word counts
//     let wordCounts = {};
//     words.forEach(word => {
//         wordCounts[word] = (wordCounts[word] || 0) + 1;
//     });
//     let results = statsGenerator(cleanString, words, wordCounts, stats);
//     let style = "background-color: #0d6efd; font-weight: bold; font-size: 1rem; padding: .5em 1.2em;"
//     let style2 = "background-color: #0d6efd; color: white; font-weight: bold; font-size: 1rem; padding: .5em 1em;"
//     console.log("%cLenght:%c%i characters", style, style2, results.stringLength);
//     console.log("%cLength witout white-spaces:%c%i characters", style, style2, results.cleanStringLenght);
//     console.log("%cWords:%c%i", style, style2, results.words);
//     console.log("%cUnique Words:%c%i", style, style2, results.uniqueWords);
//     console.log("%cUnique Words(%):%c%i%", style, style2, results.uniqueWordsPercentage);
//     console.log("%cLength of shortest word:%c%i characters", style, style2, results.minWordLenght);
//     console.log("%cLength of longest word:%c%i characters", style, style2, results.maxWordLenght);
//     console.log("%cAvg. word length:%c%i", style, style2, results.averageWordLenght);
// }
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
// function generarEstadisticasTexto(texto) {
//     var palabras = texto.trim().split(/\s+/);
//     var longitudTotal = texto.length;
//     var longitudSinEspacios = texto.replace(/\s/g, '').length;
//     var palabrasUnicas = [...new Set(palabras)];
//     var longitudPalabras = palabras.map(palabra => palabra.length);
//     var cantidadPalabras = palabras.length;
//     var cantidadPalabrasUnicas = palabrasUnicas.length;
//     var longitudPalabraMasCorta = Math.min(...longitudPalabras);
//     var longitudPalabraMasLarga = Math.max(...longitudPalabras);
//     var sumaLongitudPalabras = longitudPalabras.reduce((acc, curr) => acc + curr, 0);
//     var promedioLongitudPalabras = Math.round(sumaLongitudPalabras / cantidadPalabras);

//     console.log("Length:", longitudTotal, "characters");
//     console.log("Length without white-space:", longitudSinEspacios, "characters");
//     console.log("Words:", cantidadPalabras);
//     console.log("Unique words:", cantidadPalabrasUnicas);
//     console.log("Unique words(%):", (cantidadPalabrasUnicas / cantidadPalabras) * 100 + "%");
//     console.log("Length of shortest word:", longitudPalabraMasCorta, "characters");
//     console.log("Length of longest word:", longitudPalabraMasLarga, "characters");
//     console.log("Avg. word length:", promedioLongitudPalabras);
// }

// var userInput = prompt("Ingrese un texto:");
// generarEstadisticasTexto(userInput);

//Ejercicio 7

// const exercise7 = () => {
//     let toGuess = numberGenerator(10, 0);
//     console.log(toGuess);
//     let attemps = 3;
//     let userWon = false;
//     console.log("Let's play!");
//     let userNumber = prompt("Try to guess a number between 0 and 10");
//     while (--attemps >= 0 && !userWon) {
//         if (toGuess == +userNumber) {
//             alert("You win!");
//             userWon = true;
//         } else if (attemps > 0) {
//             userNumber = prompt(`Try it again, you have ${attemps} more attemps`);
//         }
//     }
//     if (!userWon) {
//         alert("Sorry, Good luck in love");
//     }
// }

// function random (min, max) {
//     console.log (Math.floor(Math.random() * max) + min);
// }
// let num = random(1, 10);

// let errores = 0;

// let guess = prompt ("Guess the number!")

// if (guess == num )
// {

//     console.log("You win!")
// }
// else if( guess =! num) {

//     console.log ("Try it again")
// }
//  for (let errores = 0; errores > 3; errores++) {
    
//     console.log("Good luck in love")
//  } 
 

//Ejercicio 8

// 

// function generarContrasena() {
//     var longitud = parseInt(prompt("Ingrese la longitud de la contraseña (entre 8 y 16):"));
    
//     // Validar la longitud de la contraseña
//     if (isNaN(longitud) || longitud < 8 || longitud > 16) {
//         alert("La longitud de la contraseña debe estar entre 8 y 16 caracteres.");
//         return;
//     }
    
//     var incluirMinusculas = confirm("¿Incluir letras minúsculas?");
//     var incluirMayusculas = confirm("¿Incluir letras mayúsculas?");
//     var incluirNumeros = confirm("¿Incluir números?");
//     var incluirSimbolos = confirm("¿Incluir símbolos?");
    
//     // Definir los rangos ASCII para los diferentes tipos de caracteres
//     var rangoMinusculas = [97, 122];
//     var rangoMayusculas = [65, 90];
//     var rangoNumeros = [48, 57];
//     var rangoSimbolos = [33, 47].concat([58, 64]).concat([91, 96]).concat([123, 126]);
    
//     var caracteresPermitidos = [];
    
//     if (incluirMinusculas) {
//         caracteresPermitidos.push(...obtenerCaracteresAleatorios(rangoMinusculas[0], rangoMinusculas[1]));
//     }
    
//     if (incluirMayusculas) {
//         caracteresPermitidos.push(...obtenerCaracteresAleatorios(rangoMayusculas[0], rangoMayusculas[1]));
//     }
    
//     if (incluirNumeros) {
//         caracteresPermitidos.push(...obtenerCaracteresAleatorios(rangoNumeros[0], rangoNumeros[1]));
//     }
    
//     if (incluirSimbolos) {
//         caracteresPermitidos.push(...obtenerCaracteresAleatorios(rangoSimbolos[0], rangoSimbolos[1]));
//     }
    
    // Generar la contraseña
//     var contrasena = "";
//     for (var i = 0; i < longitud; i++) {
//         var indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
//         contrasena += caracteresPermitidos[indiceAleatorio];
//     }
    
//     alert("Contraseña generada: " + contrasena);
// }

// function obtenerCaracteresAleatorios(min, max) {
//     var caracteres = [];
//     for (var i = min; i <= max; i++) {
//         caracteres.push(String.fromCharCode(i));
//     }
//     return caracteres;
// }

// generarContrasena();

//Ejercicio 1
// function palabra(word) {
//     console.log(word.length)
//     for (let index = 0; index < word.length; index++) {
//         console.log(word[index]);

//     }
// }
// palabra("palindrome");

//Ejercicio 2
// function pal(sentence) {
//     let reversedSentence = ""
//     for (let index = sentence.length - 1; index >= 0; index--) {
//         reversedSentence += sentence[index]
//     }
//     console.log(reversedSentence)
// }
// pal("no lemon, no melon");

//Ejercicio 3
// function ast() {
//     let tablero = [
//         ['0', '0', '0', '0'],
//         ['1', '1', '1', '1'],
//         ['2', '2', '2', '2'],
//         ['3', '3', '3', '3']
//     ]
//     console.log(tablero[0]);
//     for (let row = 0; row < tablero.length; row++) {
//         let board = ''
//         for (let column = 0; column < tablero[row].length; column++) {
//             board += tablero[row][column]
//         }
//         console.log(board)
//     }


// }

// ast();
// const exercise3 = () => {

//     let asterisks = "";
//     for (let i = 0; i < 4; i++) {
//         asterisks += "**\n";
//     }
//     console.log(asterisks);
// }
// exercise3();

//Ejercicio 4
// function temp() {
//     let media = [33, 32, 31, 30, 31, 31, 30]
//     media.sort((a, b) => a - b);
//     let median = (media[(media.length - 1) >> 1] + media[media.length >> 1]) / 2
//     console.log(median)
// }
// temp();

//Ejercicio 5

// function stringManager(texto, objeto) {
//     let userString;
//     do {
//         userString = prompt("Introduce un string").trim();

//     } while (!userString);

//     let result = {
//         replaceChars: false,
//         replaceCharsResult: '',
//         capitalize: false,
//         capitalizeResult: '',
//         replaceSpaces: false,
//         replaceSpacesResult: ''
//     }
//     result.replaceChars = confirm("Replace chars by signs?")
//     result.capitalize = confirm("Capitalize?")
//     result.replaceSpaces = confirm("Replace spaces with commas?")

//     if (result.replaceChars == true) {
//         result.replaceCharsResult = userString.replaceAll('a', '@').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0').replaceAll('s', '$')
//         console.log(result.replaceCharsResult)
//     }
//     if (result.capitalize == true) {
//         let words = userString.split(" ")
//         for (let index = 0; index < words.length; index++) {
//             words[index] = words[index].replace(words[index][0], words[index][0].toUpperCase())
//             console.log(words[index])
//         }
//         result.capitalizeResult = words.join(' ')
//         console.log(result.capitalizeResult)

//     }
//     if (result.replaceSpaces == true) {
//         result.replaceSpacesResult = userString.replaceAll(" ", ",");
//         console.log(result.replaceSpacesResult)
//     }



// }
// stringManager();

//Ejercicio 6
// function chart(string) {
//     let sentence = "Lorem ipsum dolor isum iset"
//     let palabras = sentence.split(' ');
//     let longitud = sentence.length;
//     let longSinEspacios = sentence.replace(/\s/g, "").length
//     let longSinEspacios1 = sentence.split('').length;
//     console.log(sentence)
//     console.log(longitud)
//     console.log(longSinEspacios)
//     console.log(longSinEspacios1)
//     let masCorta = palabras.reduce((shortestWord, currentWord) => {
//         return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     }, palabras[0]);
//     return masCorta;



// }
// chart("Lorem ipsum dolor isum iset");


//Ejercicio 7
// function random(min, max) {
//     let num = Math.floor(Math.random() * max) + min;
//     let counter = 0;
//     let guess = prompt("Guess the number!")
//     counter++
//     do {
//         prompt("Ingrese un número del 1 al 10")
//     }
//     while (guess < 1 && guess > 10) {
//     }

//     if (guess == num) {
//         console.log("You win!")
//     }
//     else if (guess != num) {
//         console.log("Try again")
//     }
//     else if (counter == 3) {
//         console.log("Game over")
//     }
//     console.log(num)
// }
// random(1, 10)

//Ejercicio 8
function passwordGenerator() {
    let caracteres = prompt("¿Cuántos carácteres va a tener la contraseña?")
    let password = caracteres;

    if (caracteres < 8 && caracteres > 12) {
        console.log("La contraseña debe tener entre 8 y 12 caracteres")
    }

    let mayusculas = confirm("¿Desea introducir mayusculas?")
    let minusculas = confirm("¿Desea introducir minúsculas?")
    let num = confirm("¿Desea introducir números?")
    let symbol = confirm("¿Desea introducir símbolos?")

    if (!mayusculas && !minusculas && !num && !symbol) {
        password >= charCodeAt(141) && password <= charCodeAt(172);
        console.log("Esta es tu contraseña generada:", password)
    }

}

function generaNumeros(min, max) {
    password.Math.floor(Math.random() * (max + min + 1) + min);

}
passwordGenerator();