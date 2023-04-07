// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
let base = prompt("Ingrese la base:");
let altura = prompt("Ingrese la altura:");
let areaTriangulo = 0.5 * base * altura;
console.log(`El área del triángulo es: ${areaTriangulo}`);

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
let ladoA = parseInt(prompt("Ingrese el lado a:"));
let ladoB = parseInt(prompt("Ingrese el lado b:"));
let ladoC = parseInt(prompt("Ingrese el lado c:"));
let perimetroTriangulo = ladoA + ladoB + ladoC;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}`);

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
let largo = parseInt(prompt("Ingrese el largo:"));
let ancho = parseInt(prompt("Ingrese el ancho:"));
let areaRectangulo = largo * ancho;
let perimetroRectangulo = 2 * (largo + ancho);
console.log(`El area del rectangulo es: ${areaRectangulo}`);
console.log(`El perímetro del rectangulo es: ${perimetroRectangulo}`);

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
let radio = prompt("Ingrese el radio:");
let areaCirculo = 3.14 * radio * radio;
let circunferenciaCirculo = 2 * 3.14 * radio;
console.log(`El área de un círculo es: ${areaCirculo}`);
console.log(`La circunferencia de un círculo es: ${circunferenciaCirculo}`);

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2

// 6. La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

// 7. Compare la pendiente de las dos preguntas anteriores.

// 8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
let horas = prompt("Ingrese las horas:");
let tarifa = prompt("Ingrese la tarifa por horas:");
let calculo = horas * tarifa;
console.log(`Su ganancia semanal es ${calculo}`);

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
let nombre = "Cristina";

if (nombre.length > 7) {
  console.log("Tu nombre es largo");
} else {
  console.log("Tu nombre es corto")
}

// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let firstName = "Cristina";
let lastName = "López";

if (firstName.length > lastName.length) {
  console.log(`Tu primer nombre, ${firstName}, es más largo que tu apellido, ${lastName}`);
} else {
  console.log(`Tu apellido, ${lastName}, es más largo que tu nombre, ${firstName}`);
}

// 12. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
let myAge = 250;
let yourAge = 25;
let calcularAños = myAge - yourAge;
console.log(`Soy ${calcularAños} años mayor que tú`);

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
let actual = new Date();
let cumpleaños = new Date(prompt("Introduce tu año de nacimiento"));
let calculoAños = actual.getFullYear() - cumpleaños.getFullYear();
if (calculoAños > 18) {
  console.log(`Tienes ${calculoAños} años. Tienes la edad suficiente para conducir.`);
} else {
  console.log(`Tienes ${calculoAños} años. Podrás conducir después de ${18-calculoAños} años`);
}

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
let añosVida = new Date(prompt("Introduce el número de años que tienes"));
let segundos = añosVida.getTime() - 3153600000;
console.log(`Te queda por vivir ${segundos}`);

// 15. Cree un formato de hora legible por humanos usando el objeto Date.
let hoy = new Date();
// YYYY-MM-DD HH:mm
console.log(`${hoy.getFullYear()}-${hoy.getMonth()}-${hoy.getDate()} ${hoy.getHours()}:${hoy.getMinutes()}`);
// DD-MM-YYYY HH:mm
console.log(`${hoy.getDate()}-${hoy.getMonth()}-${hoy.getFullYear()} ${hoy.getHours()}:${hoy.getMinutes()}`);
// DD/MM/YYYY HH:mm
console.log(`${hoy.getDate()}/${hoy.getMonth()}/${hoy.getFullYear()} ${hoy.getHours()}:${hoy.getMinutes()}`);