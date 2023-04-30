// 2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people I teach HTML CSS JS React Python";

let words = text.split(" ");
console.log(words);
console.log(words.length);


// 3. En el siguiente carrito de compras agregue, elimine, edite artículos
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// - Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift("Meat");
console.log(shoppingCart);
// - Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
shoppingCart.push("Sugar");
console.log(shoppingCart);
// - Elimine 'Honey' si es alérgico a la miel (honey)
let alergicoMiel = confirm("¿Eres alergico a la miel?");
if (alergicoMiel) {
  shoppingCart.splice(4, 1);
  console.log(shoppingCart);
}
// - Modificar Tea a 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart);


// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

// 6. Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);