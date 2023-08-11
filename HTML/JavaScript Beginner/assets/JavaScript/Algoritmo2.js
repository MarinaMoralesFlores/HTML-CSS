// // Declaring a comparison function
// function compare(value1, value2) {
//     if (value1 < value2) {
//     return -1;
//     } else if (value1 > value2) {
//     return 1;
//     } else {
//     return 0;
//     }
//     }

//     let numbers = [0, 1, 5, 10, 15];
//     numbers.reverse();

//     moreNumbers.sort(compare);
//     alert(moreNumbers); // 0,1,5,10,15

// // Otra manera de hacerlo

// let unorderedNumbers = [20, -8, 3 , 3, 102, 43, 18];
// let counter = 0;
// unorderedNumbers.sort(
//     function (value1, value2) {
//         counter++;
//         console.log("value 1:", value1);
//         console.log("value 2:", value2);
//         return value1 - value2;
//     });

// console.log(counter);
// console.log(unorderedNumbers);

// //Función flecha
// unorderedNumbers.sort(
//     (value1,value2) =>value2-value1)
// console.log(unorderedNumbers);

//For of . Cuando no modificamos los elementos del array y solo sacamos los valores para hacer
//algo con ellos, es mejor utilizar este for. // Arrays y strings
// for (let num of numbers) {
//     console.log(num)
// }
//For in. For para objetos
// let shoppingCart = {
//     converse: {
//         product_id: 1,
//         name: "Platform Black",
//         price: 80,
//         quantity: 1,
        
//     },
//     nike: {
//         product_id: 2,
//         name: "Nike 1998",
//         price: 90,
//         quantity: 1,
//     },
//     adidas: {
//         product_id: 3,
//         name: "Adidas Forum",
//         price: 85,
//         quantity: 1,
//     },
//     nb: {
//         product_id: 4,
//         name: "NB 2002R",
//         price: 120,
//         quantity: 1,
//     },
// }

// for (let key in shoppingCart) {
//     console.log(shoppingCart[key].product_id + shoppingCart[key].name);
// }

// let hero = {
//     character: "Iron Man",
//     name: "Tony Stark",

// }
// for( let key in hero){
// console.log(`${key} => ${hero[key]}`)

// }
// For each
// ["Aragorn", "Gandalf", "Nazgul"].forEach((element, index, array) => {
//     console.log(`${element} is at index: ${index} in this array: [${array}]`);
// });

// [..."Soverano de Angmar en tiempos pasados"].forEach((letter) => {
//     console.log(letter)
// })

//Mapeo
// let numbers = [1,2,3];
// let mappedNumbers = numbers.map(
//     number => number *2
// )
// console.log(mappedNumbers)

// let filteredNumbers = numbers.filter(number => number <3)
// console.log(filteredNumbers)

// /Comprobar que elementos cumplan una condición
// console.log(
//     numbers.every(number => number >2) 
    
// );
// console.log(
// numbers.some (number => number >2))

//Reduce

// let totalSum =numbers.reduce((accum, number ) => accum + number, 0);
// console.log(totalSum)

// totalSum = 0;
// totalSum =numbers.reduceRight((accum, number ) => accum + number, 0);
// console.log(totalSum)

//Array anidados

// let calendar = new Array (5)
// for (let index = 0; index < calendar.length; index++) {
//     calendar[index] = new Array (7)
    
// }

// for (let row = 0, day = 1; row < calendar.length; row++){

//     for (let col = 0; col < calendar[row].length; col++) {
//         if (day <31) {
//             calendar[row][col] = day++;
//         }
//         else if (day == 31){
//             calendar [row][col] = day;
//             day=1;
//         }
//     }
// }
// console.log(calendar)

// //Funciones



// function sayHello (name) {
//     console.log (`Hi, good night ${name}`);
    
// }

// sayHello("Marina");

// const sum = function (num1, num2) {
//     return num1 +num2;
    
// };

// console.log(sum(2,2))


