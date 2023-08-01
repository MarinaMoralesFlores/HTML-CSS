// //Ejercicio 1
// let today2 = new Date();
// let getCurrentMonth = today2.getMonth();
// let answer = "The actual month has: ";
// switch (12) {
//   case 0:
//     console.log(answer + 31 + " days");
//     break;
//   case 1:
//     console.log(answer + 28 + " days");
//     break;
//   case 2:
//     console.log(answer + 31 + " days");
//     break;
//   case 3:
//     console.log(answer + 30 + " days");
//     break;
//   case 4:
//     console.log(answer + 31 + " days");
//     break;
//   case 5:
//     console.log(answer + 30 + " days");
//     break;
//   case 6:
//     console.log(answer + 31 + " days");
//     break;
//   case 7:
//     console.log(answer + 31 + " days");
//     break;
//   case 8:
//     console.log(answer + 30 + " days");
//     break;
//   case 9:
//     console.log(answer + 31 + " days");
//     break;
//   case 10:
//     console.log(answer + 30 + " days");
//     break;
//   case 11:
//     console.log(answer + 31 + " days");
//     break;
//   default:
//     answer = "Unknown month";
//     console.log(answer);
//      break;
//  }

//Ejercicio 4

// let isGreen = true;
// if (isGreen == true) {
//     console.log("Cross the road")
// }

// else if ( isGreen != true) {
//     console.log("Please await")
// }

//Ejercicio 5

// let temp = "Boiling point"

// switch(temp) {
//     case "Absolute Zero":
//     console.log((9/5*-273.15)+32)
//     break;
//     case "Freezing point":
//     console.log((9/5*0)+32)
//     break;
//     case "Body Temperature":
//     console.log((9/5*37)+32)
//     break;
//     case "Boiling point":
//     console.log((9/5*100)+32)
//     break;
// }

//Ejercicio 6

// let user = 'tolkien@lordofrings.com';
// let password = 'aNBR6ZeWPY';

// let userName = prompt ("Whats your username?")
// let userPassword = prompt ("What's your password?")

// if ( user == userName && password == userPassword) {
//     alert ("Welcome Mr Tolkien");
//     console.log("Welcome Mr. Tolkien")
// }

// else if (user != userName && password != userPassword) {

//     alert ("Incorrect username or password. Try again");
//     console.log("Incorrect username or password. Try again")
// }

// Ejercicio 7
// let moneda = 'dolar';
// let dolar = 0.91;
// let yen = 0.0064;
// let libra = 1.17;
// let franco = 1.04;

// swith(moneda) {
//     case dolar:
//         console.log(dolar);
//         break;
//     case "Yen Japonés":
//         console.log(yen)
//         break;
//     case "Libra esterlina":
//         console.log(libra)
//         break;
//     case "Franco suizo":
//         console.log(franco)
//         break;

// }
// Exercise 7
// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

//Ejercicio 9
//Comprobador de DNI
let identificacion = prompt(
  "¿Se va a registrar con el DNI o con el NIE?"
).toUpperCase();
switch (identificacion) {
  case "DNI":
    var DNI = prompt("Introduzca su DNI");
    if (
      DNI.charCodeAt(0) >= 48 &&
      DNI.charCodeAt(0) <= 57 &&
      DNI.charCodeAt(1) >= 48 &&
      DNI.charCodeAt(1) <= 57 &&
      DNI.charCodeAt(2) >= 48 &&
      DNI.charCodeAt(2) <= 57 &&
      DNI.charCodeAt(3) >= 48 &&
      DNI.charCodeAt(3) <= 57 &&
      DNI.charCodeAt(4) >= 48 &&
      DNI.charCodeAt(4) <= 57 &&
      DNI.charCodeAt(5) >= 48 &&
      DNI.charCodeAt(5) <= 57 &&
      DNI.charCodeAt(6) >= 48 &&
      DNI.charCodeAt(6) <= 57 &&
      DNI.charCodeAt(7) >= 48 &&
      DNI.charCodeAt(7) <= 57 &&
      DNI.charCodeAt(8) >= 65 &&
      DNI.charCodeAt(8) <= 90
    ) {
      alert("You logged correctly");
    } else {
      alert("Your DNI number is incorrect");
    }
    break;
  case "NIE":
    var NIE = prompt("Introduzca su NIE");
    if (
      (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
      NIE.charCodeAt(1) >= 48 &&
      NIE.charCodeAt(1) <= 57 &&
      NIE.charCodeAt(2) >= 48 &&
      NIE.charCodeAt(2) <= 57 &&
      NIE.charCodeAt(3) >= 48 &&
      NIE.charCodeAt(3) <= 57 &&
      NIE.charCodeAt(4) >= 48 &&
      NIE.charCodeAt(4) <= 57 &&
      NIE.charCodeAt(5) >= 48 &&
      NIE.charCodeAt(5) <= 57 &&
      NIE.charCodeAt(6) >= 48 &&
      NIE.charCodeAt(6) <= 57 &&
      NIE.charCodeAt(7) >= 48 &&
      NIE.charCodeAt(7) <= 57 &&
      NIE.charCodeAt(8) >= 65 &&
      NIE.charCodeAt(8) <= 90
    ) {
      alert("You logged correctly");
    } else {
      alert("Your NIE number is incorrect");
    }
    break;
  default:
    alert("Incorrect option");
}


//Ejercicio 10
// let max = 6;
// let min = 1;
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// //let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Player 1 wins!");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Player 2 wins!");
// } else {
//   console.log("Draw");
// }
