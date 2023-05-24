// 1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
function solveLinEquation(a, b, c, x) {
  let y = (a * x - c) / b
  return y
}
console.log(solveLinEquation(2, 3, -6, 4))

// 2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  var discriminant = b * b - 4 * a * c;
  var solutions = [];

    if (discriminant > 0) {
        // Dos soluciones reales distintas
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutions.push(x1, x2);
    } else if (discriminant === 0) {
        // Una solución real doble
        var x = -b / (2 * a);
        solutions.push(x);
    }

    return solutions;
}

console.log(solveQuadEquation(1, 4, 4))

// 3. Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
function printArray(arreglo) {
  for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]) 
  }
}
let frutas = ["Naranja", "Fresa", "Kiwi", "Pera"]
console.log(printArray(frutas))

// 4. Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
function showDateTime() {
  const fecha = new Date();
  let formatoFecha = fecha.toLocaleDateString("en-GB")
  let formatoHora = fecha.toLocaleTimeString("en-GB");
  console.log(`${formatoFecha} ${formatoHora}`)
}
showDateTime()

// 5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
function swapValues(x, y) {
  let j = x;
  x = y;
  y = j;
  return `${x}, ${y}`
}
console.log(swapValues(4, 5))

// 6. Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
function reverseArray(arreglo) {
  let arrayInvertido = []
  for (let i = arreglo.length-1; i >= 0 ; i--){
    arrayInvertido.push(arreglo[i])
  }
  return arrayInvertido
}
let arrayNumeros = [1,2,3,4,5]
console.log(reverseArray(arrayNumeros))

// 7. Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
function capitalizeArray(arreglo) {
  let capitalizedarray = [];

  for (let i = 0; i < arreglo.length; i++){
    let capitalizeLetra = arreglo[i].charAt(0).toUpperCase() + arreglo[i].slice(1);
    capitalizedarray.push(capitalizeLetra)
  }

  return capitalizedarray
}
let frase = ["hola", "me", "llamo", "cristina"]
console.log(capitalizeArray(frase))

// 8. Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
function addItem(element) {
  const elements = ["móvil", 10, "fotografía", 8]

  elements.push(element)

  return elements
}

console.log(addItem(2))

// 9. Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
function removeItem(index) {
  const skincare = ["gel", "tónico", "serum", "crema hidrantate", "crema solar"]

  skincare.splice(index, 1)

  return skincare
}
console.log(removeItem(2))

// 10. Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
function sumOfNumbers(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++){
    sum += i;
  }

  return sum
}
console.log(sumOfNumbers(5))


// 11. Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
function sumOfOdds(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++){
    if (i % 2 == 1) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumOfOdds(10))

// 12. Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
function sumOfEven(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++){
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(10))

// 13. Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
function evensAndOdds(num) {
  let numImpares = 0;
  let numPares = 0;

  for (let i = 0; i <= num; i++){
    if (i % 2 == 0) {
      numPares++;
    } else if (i % 2 == 1) {
      numImpares++;
    }
  }
  return `El número de impares es ${numImpares} y el número de pares es ${numPares}`
}
console.log(evensAndOdds(100));

// 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
function sumArguments() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }

  return sum
}
console.log(sumArguments(1, 2, 3, 4))

// 15. Escriba una función randomUserIp que genere una ip de usuario aleatoria.
function randomUserIp() {
  let ip = "";

  for (let i = 0; i < 4; i++){
    let octet = Math.floor(Math.random() * 256);
    ip += octet;

    if (i !== 3) {
      ip += "."
    }
  }
  return ip;
}
console.log(randomUserIp())


// 16. Escriba una función randomMacAddress que genere una dirección mac aleatoria.
function randomMacAddress() {
  let mac = "";

  for (let i = 0; i < 6; i++){
    var hex = Math.floor(Math.random() * 256).toString(16); // Genera un número aleatorio entre 0 y 255 y lo convierte a hexadecimal
    
    if (hex.length === 1) {
      hex = "0" + hex; // Agrega un cero al inicio si el valor hexadecimal es de un solo dígito
    }
    mac += hex;
    
    if (i !== 5) {
      mac += ":";
    }
  }

  return mac;
}
console.log(randomMacAddress())

// 17. Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
function randomHexaNumberGenerator() {
  let hexadecimal = ""
  let digitos = "abcdef123456789"

  for (let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * digitos.length);
    let randomLetra = digitos.charAt(random);
    hexadecimal = hexadecimal + randomLetra
  }

  return `#${hexadecimal}`
}
console.log(randomHexaNumberGenerator())

// 18. Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
function userIdGenerator() {
  let generatorId = "";
  let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"

  for (let i = 0; i < 7; i++){
    let random = Math.floor(Math.random() * caracteres.length);

    generatorId = generatorId + caracteres.charAt(random);
  }

  return generatorId
}
console.log(userIdGenerator())