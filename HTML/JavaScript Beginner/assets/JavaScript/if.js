//Hacer temporizador. minuto hora segundo fecha exacta
const fecha = new Date();
let today = fecha.getDate;
let day = today;
let mes = fecha.getMonth;
let año = fecha.getFullYear;
let minutos = fecha.getMinutes;
let hora = fecha.getHours;
let segundo = fecha.getSeconds;

let fullDate = `${hora}` `${minutos}` `${segundo}` `${day}` `${mes}` `${año}`

console.log(fullDate)