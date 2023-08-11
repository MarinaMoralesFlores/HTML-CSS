//EJercicio 1

// Función para generar un número aleatorio entre min (incluido) y max (incluido)
// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Función principal
//   function generarArrayAleatorio() {
//     const minimo = parseInt(prompt("Introduce el valor mínimo:"));
//     const maximo = parseInt(prompt("Introduce el valor máximo:"));
  
//     if (isNaN(minimo) || isNaN(maximo)) {
//       console.log("Debes introducir números válidos.");
//       return;
//     }
  
//     if (minimo > maximo) {
//       console.log("El valor mínimo debe ser menor o igual al valor máximo.");
//       return;
//     }
  
//     const arrayAleatorio = [];
  
//     for (let i = 0; i < 20; i++) {
//       arrayAleatorio.push(generarNumeroAleatorio(minimo, maximo));
//     }
  
//     console.log("Array generado:", arrayAleatorio);
      
//     let valorMasAlto = (Math.max(...arrayAleatorio))
//     let valorMasBajo = (Math.min(...arrayAleatorio))
//   //let valorMasAltoIndex = arrayAleatorio.findIndex((v) => v === valorMasAlto) on posición ${valorMasAltoIndex} `
//   //let valorMasBajoIndex = arrayAleatorio.findIndex((v) => v === valorMasBajo)
//   console.log(`El valor mas alto es ${valorMasAlto}`)
//   console.log(`El valor mas bajo es ${valorMasBajo}`)
//   }



//   generarArrayAleatorio();


//Ejercicio 2

// function greetings (name) {


//     let saludos = {
//         goodmorning: '',
//         goodafternoon: '',
//         goodevening: ''
//     }
//     let username = prompt("Por favor, indique su nombre")

//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
  
    
//     console.log(hour)
//     console.log(username)
//     if (hour >=5 && hour <12) {
//         console.log("Good morning ", username)
//     }
//     else if ( hour >12 && hour <=18) {
//         console.log("Good afternon ", username)
//     }
//     else if( hour >=18 && hour <5) {
//         console.log("Good evening ", username)
//     }

// }
// greetings();

//Ejercicio 3
// Función para generar un número hexadecimal aleatorio
function generarCodigoHexadecimal() {
    const caracteresHexadecimales = "0123456789ABCDEF";
    let codigo = "";
  
    for (let i = 0; i < 6; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresHexadecimales.length);
      codigo += caracteresHexadecimales.charAt(indiceAleatorio);
    }
  
    return "#" + codigo;
  }
  
  // Función para generar un array de códigos hexadecimales no repetidos
//   function generarCodigosHexadecimales() {
//     const codigosGenerados = new Set();
//     const codigosFinales = [];
  
//     while (codigosFinales.length < 10) {
//       const codigo = generarCodigoHexadecimal();
//       if (!codigosGenerados.has(codigo)) {
//         codigosGenerados.add(codigo);
//         codigosFinales.push(codigo);
//       }
//     }
  
//     return codigosFinales;
//   }
  
//   // Generar y mostrar los códigos hexadecimales
//   const codigosAleatorios = generarCodigosHexadecimales();
//   console.log("Códigos hexadecimales generados:", codigosAleatorios);

//   for (let index = 0; index < 10; index++) {
//     console.log("Hello world", '%cColor', `${codigosAleatorios}`)
    
//   }

// setInterval(() => {
//     for (let i = 1; i <= 10; i++) {
//       console.log(
//         "%cHello World!",
//         `color: #${Math.floor(Math.random() * 16777215).toString(16)}`
//       );
//     }
//   }, 100);


//Ejercicio 5

// const exercise4 = () => {
//     let validLetters = [
//       "T",
//       "R",
//       "W",
//       "A",
//       "G",
//       "M",
//       "Y",
//       "F",
//       "P",
//       "D",
//       "X",
//       "B",
//       "N",
//       "J",
//       "Z",
//       "S",
//       "Q",
//       "V",
//       "H",
//       "L",
//       "C",
//       "K",
//       "E",
//     ];
  
//     // console.log(validLetters[22]);
//     let dni = prompt("Please, enter your DNI: ");
//     let numbers = dni.substring(0, dni.length - 1);
//     let letter = dni.substring(dni.length - 1);
//     // console.log(letter);
//     if (validLetters[parseInt(numbers) % 23] == letter) {
//       alert("Valid DNI");
//     } else {
//       alert("The data entered is wrong");
//     }
  
//     const dniGenerator = () => {
//       let randomNumber = Math.floor(
//         Math.random() * (100000000 - 10000000) + 10000000
//       );
//       randomNumber += validLetters[randomNumber % 23];
//       return randomNumber;
//     };
//     for (let index = 0; index < 100; index++) {
//       console.log(dniGenerator());
//     }
//   };
  

//Ejercicio 5
// Función para generar un número aleatorio entre min (incluido) y max (incluido)
// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Función para generar una letra aleatoria
//   function generarLetraAleatoria() {
//     const letrasPermitidas = "BCDFGHJKLMNPSTVWXYZ";
//     const indiceAleatorio = Math.floor(Math.random() * letrasPermitidas.length);
//     return letrasPermitidas.charAt(indiceAleatorio);
//   }
  
//   // Función para generar una matrícula aleatoria válida
//   function generarMatriculaAleatoria() {
//     const numero = generarNumeroAleatorio(0, 9999).toString().padStart(4, '0');
//     const letra1 = generarLetraAleatoria();
//     const letra2 = generarLetraAleatoria();
//     const letra3 = generarLetraAleatoria();
  
//     return numero + letra1 + letra2 + letra3;
//   }
  
//   // Función principal
//   function generarMatriculas() {
//     const cantidadMatriculas = parseInt(prompt("Introduce el número de matrículas a generar:"));
  
//     if (isNaN(cantidadMatriculas) || cantidadMatriculas <= 0) {
//       console.log("Debes introducir un número válido mayor que cero.");
//       return;
//     }
  
//     const matriculasGeneradas = [];
  
//     while (matriculasGeneradas.length < cantidadMatriculas) {
//       const matricula = generarMatriculaAleatoria();
//       matriculasGeneradas.push(matricula);
//     }
  
//     console.log("Matrículas generadas:", matriculasGeneradas);
//   }
  
//   // Llamar a la función para generar matrículas
//   generarMatriculas();

//Ejercicio 6

// function citas () {
    

//     let counter= ["hola"] ["me"] ["marina"] ["que"] ["tal"];
// let numerr = setInterval(() => {
//     console.log(counter);
//     counter++;
//     if (counter== counter.length-1) {
//         clearInterval(numerr);
//     }
// }, 1000);


// }
// citas();
//bueno
// var items = ['html5', 'css', 'javascript', 'jquery'];
// var itemLoop = function(i) {
// if (items[i]) {
//     console.log(items[i]);
//     setInterval(function(){itemLoop(i+=1);}
//     , 1000);
//     }
// }
// itemLoop(0);

//Ejercicio 7

function generarNumeroAleatorio(min, max) {
    for(index = 0; index <= 100; index++) {
        console.log(index)
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }
}


function numeroGenerado () {
    let numero = generarNumeroAleatorio(0,500)
}
generarNumeroAleatorio();
numeroGenerado();