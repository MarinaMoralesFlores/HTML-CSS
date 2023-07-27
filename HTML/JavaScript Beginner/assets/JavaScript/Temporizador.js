// //Hacer temporizador. minuto hora segundo fecha exacta
// const fecha = new Date();
// let today = fecha.getDate();
// let day = today;
// let mes = fecha.getMonth();
// let año = fecha.getFullYear();
// let hora = fecha.getHours();
// let minutos = fecha.getMinutes();
// let segundo = fecha.getSeconds();

// let fullDate = hora+":"+minutos+":"+segundo+" "+day+"/"+mes+"/"+año

// if (mes < 10) {
//     mes = "0"+mes;
//     console.log(mes);
// }

// if (minutos <10) {
//     minutos = "0"+minutos;
//     console.log(minutos)
// }
 
// console.log(mes)
// console.log(fullDate)


let langg = prompt("Choose your language");
switch (langg) {
    case "Español":
        lng = "El lenguaje es español, ejecuta código para Español";
        break;
    case "Inglés":
        lng = "Language is english";
        break;
    case "Portugués":
        lng = "O idioma es português";
        break;
    case "polaco":
        lng ="yindovre";
        break;
    default:
        console.log("Language not chosen, using Spanish");
    break;
}
console.log(lng)