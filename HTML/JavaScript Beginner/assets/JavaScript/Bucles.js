let lenguaje = prompt("Choose your language");
switch(lenguaje) {
    case "Español":
        console.log("El lenguaje es Español")
        break;
    case "Inglés":
        console.log("Language is english")
        break;
    case "Portugués":
        console.log("Idioma es português")
        break;
    default:
        console.log("Language not chosen, using dutch")
        break;

}
console.log(lenguaje)

//numbers.js
let numero = 25;

switch(true) {
    case numero < 0:
        console.log("Es menor que cero")
    break;
    case numero >=0 && numero <=10:
        console.log("Entre 0 y 10")
    break;
    case numero >=11 && numero <=20:
        console.log("Entre 11 y 20")
    break;
    case numero > 20:
        console.log("Mayor que 20")
        break;
    case isNan(numero):
        console.log("Error de tipo")
        break;
    default:
        console.log("No es un numero correcto")
        break;
    
}
console.log(numero)

let count = 0;
while (count <10) {
    console.log(count);
    count++;
}

let i = 0;
while (i <10) {
    console.log(i);
    i += 2;

}

let ie = 0;
while (ie <100) {
    console.log(ie);
    ie +=5;

}
let iem = 0;
while (iem >= 0) {
    console.log(iem);
    iem -=5;

}


let ii = 2;
while (ii <=256) {
    console.log(ii);
    ii *=2;

}

//temporizador segundos
let counter=10;
let numerr = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter== 0) {
        clearInterval(numerr);
    }
}, 1000);

let cuenta = 10;
let sumado;
for( let sumado = 0; sumado < cuenta; sumado++) {
    console.log(sumado);
}
