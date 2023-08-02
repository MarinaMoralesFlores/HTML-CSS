// interactive menu for hex colors

// Valores primitivos
// let option = null;
// let colors = ["red", "green", "blue"];
// do {
// console.log("Please, choose a color");
// for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + " " + colors[index]);
// }
// console.log("Press 0 to leave");
// option = prompt("Make your choice");

// switch (option) {
//     case "1":
//     console.log("%cHex code for red: #FF0000", "color:rgb(81, 211, 113);");
//     break;
//     case "2":
//     console.log("Hex code for green: #008000");
//     break;
//     case "3":
//     console.log("Hex code for blue: #0000FF");
//     break;
//     default:
//         if (option != 0) {
//             console.warn ("Please enter a valid number")
//         }
//         else {
//     console.log("Exiting, see you soon!");
//         }
//     break;
//     }
// } 
//     while (option != null && option != "0");

    //Valores compuestos. Object literal syntax

    // Los corchetes [] son para los arrays
// let star = {
// name: "Polaris",
// constellation: "Ursa Minor",
// type: "Double/Cepheid",
// spectralClass: "F",
// mag: 2.0,
// }

// console.log(star.name);
// console.log(star.mag);
// star.constellation = "Ursa Major"
// console.log(star.constellation);

// let num1 = 4;
// let num2 = num1;
// console.log(num2)
// num2=7;
// console.log(num1)
// console.log(num2)


// let star2 = star;

//Ejemplo 2 de objetos

// let hero = {
//     character: "Iron man",
//     name: "Tony Stark",
//     powers: [
//         "Genius-level intellect " , "Multiple powered armor suits" , "Fly ability"
//     ],
//     info: {
//         createdDate: 1963,
//         powerOrigin: "From his suit",
//         weapons: [
//             "repulsor rays", "uni-beam projector", "lasers"
//         ],
//         didYouKnow: "Tony Stark created and built one of the Spiderman's upgraded suits known as the iron-Spider-Suit",
//     }

// }

// let hero2 =  new Object();
//     hero2.character = "Hulk";
//     hero2.name = "Bruce Banner";
//     hero2.powers = [
//         "Strength",
//         "Speed",
//         "Stamina",
//         "Durability",
//         "Regeneration"
//     ];
//     console.log(Object.keys(hero2))
//     console.log(Object.keys(hero)) //te lo devuelve en array

    //Ejercicio

    let shoppingCart = {
        converse: {
            product_id: 1,
            name: "Platform Black",
            price: 80,
            quantity: 1,
            
        },
        nike: {
            product_id: 2,
            name: "Nike 1998",
            price: 90,
            quantity: 1,
        },
        adidas: {
            product_id: 3,
            name: "Adidas Forum",
            price: 85,
            quantity: 1,
        },
        nb: {
            product_id: 4,
            name: "NB 2002R",
            price: 120,
            quantity: 1,
        },
    }
        console.log(shoppingCart)
        console.log("id:",+shoppingCart['converse']['product_id']+ ", "+ "name:"+ " " + shoppingCart['converse']['name']);
        console.log("id:",+shoppingCart['nike']['product_id']+ ", "+ "name:"+ " " + shoppingCart['nike']['name']);
        console.log("id:",+shoppingCart['adidas']['product_id']+ ", "+ "name:"+ " " + shoppingCart['adidas']['name']);
        console.log("id:",+shoppingCart['nb']['product_id']+ ", "+ "name:"+ " " + shoppingCart['nike']['name']);

        //Otra manera del console log
        console.log(`>id: ${shoppingCart.converse.product_id}, name: ${shoppingCart.converse.name}`) // y así con todos

        //con for
        let keys = Object.values(shoppingCart)
        console.log(keys)
        console.log(Object.keys(shoppingCart)) //array
        console.log(shoppingCart)      
        console.log(shoppingCart[Object.keys(shoppingCart)[0]]);

        for (let i = 0; i<Object.keys(shoppingCart).length; i++) {
            console.log ("id: " + keys[i].product_id + " , Name: "  +keys[i].name);
        }