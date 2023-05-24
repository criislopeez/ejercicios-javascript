const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"
let id = "";
let numero = Math.random() * 100;

for (let i = 0; i < numero; i++) {
  var idAleatorio = Math.floor(Math.random() * caracteres.length)

  id = id + caracteres.charAt(idAleatorio)
}
console.log(id)

// 2. Escribe un script que genere un número hexadecimal aleatorio.
let numHexadecimales = "0123456789abcdef"
let numeroHexa = ""

for (let i = 0; i < 6; i++){
  var numAleatorio = Math.floor(Math.random() * numHexadecimales.length)

  numeroHexa = numeroHexa + numHexadecimales.charAt(numAleatorio)
}
console.log(`#${numeroHexa}`);

// 3. Escribe un script que genere un número de color rgb aleatorio.
let numRgb = "0123456789"
let primerNumero = "";
let segundoNumero = "";
let tercerNumero = "";

for (let i = 0; i < 3; i++){
  var rgbAleatorio1 = Math.floor(Math.random() * numRgb.length);
  var rgbAleatorio2 = Math.floor(Math.random() * numRgb.length);
  var rgbAleatorio3 = Math.floor(Math.random() * numRgb.length);

  primerNumero += numRgb.charAt(rgbAleatorio1);
  segundoNumero += numRgb.charAt(rgbAleatorio2);
  tercerNumero += numRgb.charAt(rgbAleatorio3);
}
console.log(`rgb(${primerNumero},${segundoNumero},${tercerNumero})`);

// 4. Usando el array countries anterior, crea un array como el siguiente.
let countriesUpperCase = [];

for (let i = 0; i < countries.length; i++){
  countriesUpperCase.push(countries[i].toUpperCase());
}
console.log(countriesUpperCase);

// 5. Usando el array countries anterior, crea un array para saber la longitud de cada país.
let longitudPais = []

for (let i = 0; i < countries.length; i++){
  longitudPais.push(countries[i].length);
}

console.log(longitudPais);

// 6. Utiliza el array countries para crear la siguiente array de arrays
let arrayDeArrays = [];

for (let i = 0; i < countries.length; i++){
  let country = countries[i]; 
  let principio = country.slice(0, 3).toUpperCase();
  let tamaño = country.length;
  arrayDeArrays.push([country, principio, tamaño])
}
console.log(arrayDeArrays);

// 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
let arrayPalabra = [];

for (let i = 0; i < countries.length; i++){
  if (countries[i].includes("land")) {
    arrayPalabra.push(countries[i]);
  }
}
if (arrayPalabra.length > 0) {
  console.log(arrayPalabra);
} else {
  console.log("Todos estos países no tienen la palabra land")
}

// 8. En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
let countriesConIa = [];

for (let i = 0; i < countries.length; i++){
  if (countries[i].endsWith("ia")) {
    countriesConIa.push(countries[i])
  }
}
if (countriesConIa.length > 0) {
  console.log(countriesConIa);
} else {
  console.log("Estos países no terminan con ia");
}

// 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.
let longitudCountry = countries[0] // primer pais del arreglo y se compara con esta longitud

for (let i = 0; i < countries.length; i++){
  if (countries[i].length > longitudCountry.length) {
    longitudCountry = countries[i]
  }
}
console.log(longitudCountry);

// 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
let countries5Characters = [];

for (let i = 0; i < countries.length; i++){
  if (countries[i].length <= 5 ) {
    countries5Characters.push(countries[i]);
  }
}
console.log(countries5Characters);



const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 11. Encuentra la palabra más larga en el array webTechs
let longitudTechs = webTechs[0];

for (let i = 0; i < webTechs.length; i++){
  if (webTechs[i].length > longitudTechs.length) {
    longitudTechs = webTechs[i]
  }
}
console.log(longitudTechs);

// 12. Utiliza el array de webTechs para crear el siguiente array de arrays:
let arrayTechsLongitud = [];

for (let i = 0; i < webTechs.length; i++){
  let tech = webTechs[i];
  let lengthTechs = webTechs[i].length;
  arrayTechsLongitud.push([tech, lengthTechs])
}
console.log(arrayTechsLongitud);



const mernStack = ["MongoDB", "Express", "React", "Node"];

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
let palabraNueva = "";

for (let i = 0; i < mernStack.length; i++){
  palabraNueva = palabraNueva + mernStack[i].charAt(0)
}
console.log(palabraNueva);

// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
for (const webTech of webTechs) {
  console.log(webTech)
}

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
let frutas = ["Banana", "Orange", "Mango", "Lemon"];
let frutasInvertidas = []

for (let i = frutas.length-1; i >=0; i--){
  frutasInvertidas.push(frutas[i])
}
console.log(frutasInvertidas);

// 16. Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++){
  for (let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j].toUpperCase()); ;
  }
}