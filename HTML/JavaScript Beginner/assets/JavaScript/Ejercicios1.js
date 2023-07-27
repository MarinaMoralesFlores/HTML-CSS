// let Enero = "Invierno"
// let Febrero = "Invierno"
// let Marzo = "Primavera"
// let Abril = "Primavera"
// let mayo = "Primavera"
// let junio = "Verano"
// let julio = "Verano"
// let agosto = "Verano"
// let septiembre = "Verano"
// let octubre = "otoño"
// let noviembre = "otoño"
// let diciembre = "Invierno"

// let mesDelaño
// console.log(Enero)

// if (mesDelaño = Enero, Febrero, diciembre) {
//     console.log("Invierno");
// }
// else if (mesDelaño = Marzo, Abril, mayo) {
//     console.log("Primavera");
// }
// else if (mesDelaño = junio, julio, agosto) {
//     console.log("Verano");
// }
// else if (mesDelaño = septiembre, octubre, noviembre) {
//     console.log("otoño");
// }

// console.log(Marzo)

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

// console.log("enero")

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
