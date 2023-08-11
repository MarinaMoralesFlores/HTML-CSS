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

    class Avengers {
        //metodo constructor es metodo x defecto en cada clase. cada vez que hagamos new OBject()
        //Estamos llamando al metodo constructor
    constructor(character, name) {
        //this referencia propiedades y metodos de clase internamente. Se utiliza para referenciar
       // la propiedad de la clase
        this.character = character;
        this.name =name;
        this.powers = [];
        this.bio= "";
    }
    set power(newPower){
        this.powers.push(newPower)
    }
    get power () {
        console.log(this.powers.join(", "))
    }
    static avengersBio(){
        this.bio = "Un string cualquiera"
        console.log(this.bio)
    }
}
let ironMan = new Avengers("Iron Man", "Tony Stark");
    ironMan.power = "Flight";
    ironMan.power = "Interficial Intelligence"
    ironMan.power
    Avengers.avengersBio();