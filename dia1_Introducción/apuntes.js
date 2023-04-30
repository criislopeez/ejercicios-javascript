// !Código con un argumento
console.log('Hola, Mundo!');
console.log("Hola, Mundo!");
console.log(`Hola, Mundo!`);

// !Código con múltiples argumentos
console.log('Hola', 'Mundo', '!');

// ! Comentarios
// Comentario en una sola línea

/** Comentario en varias líneas
 * JavaScript es el lenguaje de la web, sirve para agregar interactividad a las páginas web,
 * para desarrollar aplicaciones móviles, aplicaciones de escritorio, juegos e inteligencia artificial (AI)
*/

// !Calculos matemáticos
console.log(2 + 3); // Suma
console.log(3 - 2); // Resta
console.log(2 * 3); // Multiplicación
console.log(3 / 2); // División
console.log(3 % 2); // Módulo - encontrar el resto
console.log(3 ** 2); // Exponencial

// !Tipos primitivos
// * NÚMEROS
/**
 * Enteros -> -3, -2, -1, 0, 1, 2, 3
 * Decimales -> -3.5, -2.5, -1.5, 0.0, 1.5, 2.5, 3.5
 */
// * CADENAS DE TEXTO
/** colección de uno o más caracteres entre comillas
 * "España"
 * 'España'
 * `España`
 */
// * BOOLEANOS
/** es un verdadero o falso
 * true (si la luz está encendida, el valor es Verdadero)
 * false (si la luz está apagada, el valor es Falso)
 */
// * UNDEFINED
// si no se asigna un valor a una variable, el valor es indefinido, si una función no devuelve nada es undefined.
let nombre;
console.log(nombre); // la variable no está definida
// * NULL
// valor vacío/nulo
let valorVacio = null;
console.log(valorVacio);

// !Variables
/** para almacenar datos en una ubicación de memoria, para declarar una variable se usa var, let o const
 * Sintaxis -> let nombreDeLaVaiable = valor
 */
// * Variables de diferentes tipos de datos
let nombrePersona = "Cristina"; // nombre de una persona
let apellidoPersona = "López"; // apellido de una persona
let pais = "España"; // país
let ciudad = "Valencia"; // ciudad capital
let edad = 22; // edad en años
let estaCasado = false; // si esta casado o no
console.log(nombrePersona, apellidoPersona, pais, ciudad, edad, estaCasado);
// * Variables de constante
const PI = 3.14 
console.log(PI);
// * Variables declaradas en una línea separadas por coma
let nombrePersona2 = "Cris", trabajo = "desarrolladora", viveEn = "España";
console.log(nombrePersona2, trabajo, viveEn);