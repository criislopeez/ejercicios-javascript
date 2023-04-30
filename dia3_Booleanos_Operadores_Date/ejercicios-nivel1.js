// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "Cristina";
let lastName = "López";
let country = "España";
let city = "Valencia";
let age = 23;
let isMarried = false;
let year = 2023;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Verifique si typeof '10' es igual a 10
console.log(typeof '10' == 10);

// 3. Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10);

/** 4. Verifique cualquier valor booleano true o false.
 * I. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
 * II. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
 */
let decl1 = true;
let decl2 = 1;
let decl3 = "hola";

let decl4 = false;
let decl5 = -0;
let decl6 = "";

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log("Python".length != "jargon".length);

// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3 && 10 < 12); // true y true -> true
console.log(4 > 3 && 10 > 12); // true y false -> false
console.log(4 > 3 || 10 < 12); // true o true -> true
console.log(4 > 3 || 10 > 12); // true o false -> true
console.log(!(4 > 3)); 
console.log(!(4 < 3)); 
console.log(!(false));
console.log(!(4 > 3 && 10 < 12)); // true y true -> false
console.log(!(4 > 3 && 10 > 12)); // true y false -> true
console.log(!(4 === '4'));
let palabra1 = "dragon"
let palabra2 = "python"
console.log(!(palabra1.includes("on") && palabra2.includes("on")));

// 7. Utilice el objeto Date para realizar las siguientes actividades
let fecha = new Date();
// ¿Qué año es hoy?
console.log(fecha.getFullYear());
// ¿Qué mes es hoy con un número?
console.log(fecha.getMonth());
// ¿Qué fecha es hoy?
console.log(fecha);
// ¿Qué día es hoy con un número?
console.log(fecha.getDate());
// ¿Cuál es la hora actual?
console.log(fecha.getHours());
// ¿Cuántos minutos hay actualmente?
console.log(fecha.getMinutes());
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(fecha.getTime());