// console.log('Hello, World')

// let numero = 838 < 542
// console.log(numero)

// let numero2 = 17/5
// console.log(numero2)

// let numero3 = 12 * 6 
// console.log(numero3)

// let numero4 = 35%8

// console.log(numero4)    


 

// let numero5 = 1 == 3 || 5>7 || 10*5 > 40

// console.log(numero5)


 

// let numero6 = 13% 2 == 0

// console.log(numero6)


 

// let numero7 = "CODE" + "" + "SPACE"

// console.log(numero7)  


 

// let numero8 = (21/2) %3

// console.log(numero8)


 

// let numero9 = 5 == "5"

// console.log(numero9)  

// let numero10 = !(1 == 1)

// console.log(numero10)
// a. Boolean
// b. 3.4. Numero
// c. Numero. 72
// d  3 numero
// e true - Boolean
// f false Boolean
// g  CODESPACE string
// h 1.5 numero
// i true Boolean
// j false Boolean


// let totalBet = prompt("Please enter your bet");
// console.log(totalBet)

// if (totalBet == 5000) {
//     alert("All in!");
// }

// else if(totalBet < 5000) {
//     alert ("Pass another round");
// }
// else {
//     alert("Wrong bet, try again");
//     totalBet = prompt("Please enter your bet");
// }

// const mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio","agosto","septiembre",
// "octubre", "noviembre","diciembre"];


// if (mes == "enero", "febrero", "marzo") {
//     console.log("Invierno")
// }
// else if (mes == "abril", "mayo", "junio", "julio") {
//     console.log("Primavera")
// }
// else if (mes == "agosto", "septiembre", "octubre", "noviembre") {
//     console.log("Otoño")
// }


// const d = new Date();
// let month = d.getMonth();
// let today = d.getDate();
// let dayOfweek = d.getDay();

// console.log(today)

// if ( month == d.getMonth) {
//     console.log ("Invierno")
// }
 
// console.log(dayOfweek)

const month = new Date().getMonth()

if (month === 11 || month === 0 || month === 1 ) {
    console.log('winter')
}
else if (month === 2 || month === 3 || month === 4 ) {
    console.log('spring')
}
else if (month === 5 || month === 6 || month === 7 ) {
    console.log('summer')
}

console.log(Date())


console.log(Date())


let d = new Date();
let hour = d.getMinutes();
let year = d.getFullYear();
let min = d.getHours();
let mes = d.getMonth();
let today = d.getDate();

console.log(min,":",hour)

let day = today;

if (day < 10) {
    day = "0"+day;
  
}
console.log(day);
if (mes < 10) {
    mes = "0"+mes;
    console.log(mes);
}
let fullDate = min+":"+hour+" "+day+"/"+month+"/"+year;
console.log(year);
console.log("todays date and time:")
console.log(hour)
console.log(fullDate)
