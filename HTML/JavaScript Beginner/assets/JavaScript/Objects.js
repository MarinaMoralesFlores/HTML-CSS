// let name = "Tony"

// let hero = {
//     name,
//     powers: { 
//             powers: ["Flight", "Artificial Intelligence", "Armor", "Suits"], },
// };

// hero.character = "iron man"

// console.log(hero.name)
// console.log(hero.powers.powers[2])
// console.log(hero.character)



// Computed property keys
// let powers = [
// "Master Of The Mystic Arts",
// "Astral Projection",
// "Teleportation",
// "Eye Of Agamotto",
// "Cloak of Levitation",
// ];
// let drStarnge = {
// name: "Stephen Strange", };

// powers.forEach((element, index) => {
// drStarnge [ `power${index}`] = element;
// });
//  for (const key in drStarnge) {
//  console. log (`${key} : ${drStarnge[key]}`);
// }
//Crear clases

// class Villains {
    
// }

//     class Avengers {
//         //metodo constructor es metodo x defecto en cada clase. cada vez que hagamos new OBject()
//         //Estamos llamando al metodo constructor. Es como una funcion que le da valor a su propiedades
//     constructor(character, name) {
//         //this referencia propiedades y metodos de clase internamente. Se utiliza para referenciar
//        // la propiedad de la clase
//         this.character = character;
//         this.name =name;
//         this.powers = [];
//         this.bio= "";
//     }
//     set power(newPower){
//         this.powers.push(newPower)
//     }
//     get power () {
        //console.log(this.powers.join(", "))
//     }
//     static avengersBio(){
//         this.bio = "Un string cualquiera"
//         //console.log(this.bio)
//     }
// }
// let ironMan = new Avengers("Iron Man", "Tony Stark");
    // ironMan.power = "Flight";
    // ironMan.power = "Interficial Intelligence"
    // ironMan.power
    // Avengers.avengersBio();


    //Ejercicio objetos

    class User {
        constructor(dni){
            this.dni = dni;
            this.name = "";
            this.email = "";
        }
        // static userName(){
        //     this.name = "Marina"
        //     (console.log(this.name))
        // }
        // static userEmail () {
        //     this.email = "marinamorales98@gmail.com"
        //     (console.log(this.email))
        // }
            //console.log(this.bio)
        set nombre (getName) {
            this.name = getName;
        }

        //OTra manera
        // set userName(newName) {
            //this.name = newName
        //}
        set correo (getEmail) {
            this.email = getEmail;
        }
        get nombre () {
            return this.name;
            //console.log(this.nombre.join(", "))
        }

        get correo () {
            //console.log(this.correo.join(", ")
            return this.email;
        }
    }

    let usuario = new User("77233643B");  
    console.log(usuario.dni)
    usuario.name = "Marina"
    usuario.email = "marinamorales98@gmail.com"

    console.log(usuario.name)
    console.log(usuario.email)

    console.log(usuario.correo)
    console.log(usuario.nombre)
    