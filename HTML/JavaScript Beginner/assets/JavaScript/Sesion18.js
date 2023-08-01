// //cuenta atrás
// let number = 10;
// while (number > 0) {

//     number--;
//     console.log(number);
// }

// let tabla = 0;
// let multiplicador = 0;
// while (tabla < 20 && multiplicador <10) {
//     tabla += 2;
//     multiplicador++;
//     console.log ("2 x",+multiplicador + " =", +tabla);
// }

// console.log("Tabla del 10")

// for (let number = 1; number <=10; number++) {
// console.log("Tabla del:", number);

//     let multi= 1;
//     while ( multi <= 10) {
//     console.log(number + " x " +  multi, "=", number * multi);
//     multi++;
// }
// }

// anidar bucles

// let counter = 1;
// for (;counter <=10;) {
// console.log(counter++); //si ponemos ++ a la izquierda de coounter primero suma y luego te enseña lo que tiene
// }

 // for (let counter =1, limit=10; counter <= limit; counter++){
 //     console.log(counter)
 // }

// let i,
// j,
// sum = 0;
// for (i = 0, j = 10; i < 10; i++, j--) {
// sum += i * j;
// console.log(sum);
// }

// let counter = -2;

// while (counter < 100) {
//     console.log(counter+=2)
// }


// let numero = 1
// while (numero++ <=100) {
//     if (numero % 2 == 0) {
//         break;
//     }
//     console.log(numero++)
// }

// let counter = 1;
// while (counter++ <= 100) {
//     if(counter % 2 != 0){
//         continue;
//     }
//     console.log(counter);
// }

//do-while loop


//Ejercicio 1 DUDAS
// let d = new Date();
// let fecha = d.getMonth();
// let day = d.getDay();
// let date = d.getDate();
// let fechi = d.toDateString();
// let mesActual = new Intl.DateTimeFormat ('es-ES', {month: 'long'}).format(new Date());
// let month = 6;
// if ( month == 0 || month == 2 || month == 4 || month == 6
//  || month == 7 || month == 9 || month == 11){
//     console.log("31 días")
// }
// else if ( month == 3 || month == 5 || month == 8 || month == 10
// ) {
//     console.log("30 días")
// }
// else if( month == 1) {
//     console.log("28 días")

// }
// console.log (month)
// console.log ("Este mes", mesActual + " " + "tiene", month + " días")
// console.log(fechi)
// new Date (year, month, 0).getDate() //Saca el n de dias de un mes
// console.log(mesActual)
// console.log(diasEnUnMes)

// //

//Ejercicio 2
let d = new Date();
let mes = d.getMonth();

let month = prompt("Indica el mes")

if(month == 'Enero' || month == 'Marzo' || month == 'Mayo' || month == 'Julio'
|| month == 'Agosto' || month == 'Octubre' || month == 'Diciembre'){
    console.log("Este mes tiene 31 días")
}
else if (month == 'Abril' || month == 'Junio' || month == 'Septiembre' || month == 'Noviembre'
) {
    console.log("Este mes tiene 30 días")
}
else if (month == 'Febrero') {
    console.log ("Este mes tiene 28 días")
}
else {
    console.log ("No un mes real")
}

// Ejercicio 3

// let temp = prompt("What's the temperature like?")

// if (temp < 15) {
//     console.log("Warm up")
//     }
// else if ( temp >= 15 && temp <=25) {
//     console.log("Enjoy the weather")

// }
// else if ( temp > 25) {
//     console.log("Cool down")

// }
// else if ( isNaN(temp)) {
//     console.log("Enter a number")

// }

//Ejercicio 4 DUDAS
// let tempr = prompt("Que color?")
// let isGreen;
// let color;

// switch(isGreen) {
//     case 'Verde':
//         color: 'verde'
//         console.log("Cross the road")
//         break;
//     case 'Otro':
//         color: 'Otro'
//         console.log("Please wait")
//         break;
// }

// console.log(isGreen)


//EJERCICIO 5
// let temperature;
// let grados;
// let fare = (9/5*grados)+32;
// switch(temperature) {
//     case "Absolute Zero":
//         grados =  -273.15
//         console.log(fare);
//         break;
//     case "Freezing point":
//         grados = 0
//     case "Body Temperature":
//         grados = 37
//     case "Boiling point":
//         grados = 100
// }

// switch (character) {
//     case "Captain America":
//         power = "Indestructible shield";
//         break;
//     case "Black Widow":
//         power = "Master spy & assasin";
//         break;
//     case "Iron Man":
//         power = "Genius-level intellect";
//         break;
//     case "Thor":
//         power ="The hammer of Thor";
//         break;
//     default:
//         console.log("Choose your hero");
//     break;

// }


//EJERCICIO 6
// let email = 'tolkien@lordofrings.com'
// let password = 'aNBR6ZeWPY'
// let pr = prompt("Introduce your email")
// let pr2 = prompt ("Introduce your password")

// cont=0;
// while(cont < 3) {
// 	var email=prompt("Introduzca su email");
// 	var contrasena=prompt("Introduzca su contraseña");

// if(email=='' && contrasena=='aNBR6ZeWPY') {
// 		alert('Welcome Mr. Tolkien');
//     cont = 0;
// 		break;

// }

// else{
		
//     if(email!='tolkien@lordofrings.com' && contrasena=='aNBR6ZeWPY') {
// 		  alert('Wrong password or email');
//     }
//     else if(email=='tolkien@lordofrings.com' && contrasena!='aNBR6ZeWPY') {
//       alert('contraseña incorrecta');
//     }
//     else{
//       cont++;
// 		  alert('Error. Los datos son incorrectos');
//     }
		
// 		if(cont==3) {
// 		  alert('Lo siento, has agotado el número de intentos');
// 		}	
// 	}
	
// }

//EJERCICIO 7 DUDAS


//EJERCICIO 8

// let n1 = prompt("choose a first number")
// let n2 = prompt("choose a second number")

// console.log(n1*n2)
//EJERCICIO 9 

// let preg = prompt ("Introduce tu DNI")
// let dni;

// if (dni) {


//EJERCICIO 10