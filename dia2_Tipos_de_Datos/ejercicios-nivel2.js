// 1. Usando console.log() imprima la siguiente declaración:
let texto1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(texto1);

// 2. Usando console.log() imprima la siguiente cita de la Madre Teresa:
let texto2 = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(texto2);

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof '10' === typeof 10);
console.log(typeof 10 === typeof 10);

// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log(parseFloat('9.8') == 10);
console.log(parseFloat('10') === 10);

// 5. Verifique si 'on' se encuentra tanto en Python como en la jerga
let palabra1 = 'Python';
let palabra2 = 'jerga';
console.log(palabra1.includes("on") && palabra2.includes("on"));

// 6. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
let frase = "Espero que este curso no esté lleno de jerga."
console.log(frase.includes("jargon"));

// 7. Genere un número aleatorio entre 0 y 100 inclusive.
console.log(Math.random());
let aleatorio = Math.floor(Math.random() * 101);
console.log(aleatorio);

// 8. Genere un número aleatorio entre 50 y 100 inclusive.
aleatorio = Math.floor((Math.random() * (100-50 + 1)) + 50);
console.log(aleatorio);

// 9. Genere un número aleatorio entre 0 y 255 inclusive.
aleatorio = Math.floor(Math.random() * 256);
console.log(aleatorio);

// 10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let cadena = 'JavaScript';
let caracteres = Math.floor(Math.random() * cadena.length);
console.log(caracteres);

// 11. Use console.log() y caracteres de escape para imprimir el siguiente patrón.
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

// 12. Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(oracion.substr(35, 20));