let nav = document.querySelector("nav")
console.log(nav);
let active = document.querySelector(".active");
console.log(active);
let headersAndParagraphs = document.querySelectorAll("p, h1");
console.log(headersAndParagraphs[0].innerText)

//el elemento padre
document.body.parentNode
//total de elementos hijos
document.body.children.length
document.body.childElementCount

//primer elemento hijo
document.body.children[0]

//el primer y ultimo nodos hijos
document.body.firstElementChild
document.body.lastElementChild
//siguiente y anterior hermano
document.body.nextElementSibling
document.body.previousElementSibling


//Acceder al enlace con la clase active mediante hijos
nav.children[0];
console.log(nav.children[0].children[0].children[0]);