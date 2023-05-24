// 1. Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
function userIdGeneratorByUser() {
  let generatorId = "";
  let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"

  // let cantidadCaracteres = prompt("Introduce la cantidad de caracteres");
  // let cantidadId = prompt("Introduce la cantidad de Id que se generarán")
  let cantidadCaracteres = 7;
  let cantidadId = 10;

  for (let i = 0; i < cantidadId; i++){
    for (let j = 0; j < cantidadCaracteres; j++){
      let random = Math.floor(Math.random() * caracteres.length);

      generatorId = generatorId + caracteres.charAt(random);
    }
    generatorId = generatorId + "\n";
  }

  return generatorId
}
console.log(userIdGeneratorByUser())

// !2.Escriba una función llamada rgbColorGenerator que genera colores rgb
function rgbColorGenerator() {
  let rgbPrimerColor = Math.floor(Math.random() * 256);
  let rgbSegundoColor = Math.floor(Math.random() * 256);
  let rgbTercerColor = Math.floor(Math.random() * 256);

  return `rgb(${rgbPrimerColor}, ${rgbSegundoColor}, ${rgbTercerColor})`
}

console.log(rgbColorGenerator())

// !3. Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
function arrayOfHexaColors(cantidadColores) {
  let digitos = "abcdef0123456789"
  let arregloHexadecimal = []

  for (let i = 0; i < cantidadColores; i++){
    let numHexadecimal = "#"; // se crea una nueva cadena en cada interacción

    for (let j = 0; j < 6; j++){
      var random = Math.floor(Math.random() * digitos.length);

      numHexadecimal = numHexadecimal + digitos.charAt(random)
    }
    arregloHexadecimal.push(numHexadecimal);
  }
  
  return arregloHexadecimal
}
console.log(arrayOfHexaColors(10))

// 4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
function arrayOfRgbColors(cantidadColores) {
  let arregloRgb = [];

  for (let i = 0; i < cantidadColores; i++){
    var colorRojo = Math.floor(Math.random() * 256);
    var colorVerde = Math.floor(Math.random() * 256);
    var colorAzul = Math.floor(Math.random() * 256);

    let colorRgb = `rgb(${colorRojo}, ${colorVerde}, ${colorAzul})`

    arregloRgb.push(colorRgb)
  }

  return arregloRgb
}
console.log(arrayOfRgbColors(2))

// TODO: 5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
function convertHexaToRgb(hexColor) {
  // Extraer los componentes rojo, verde y azul del color hexadecimal (se usa con una base de 16 para convertirlo en número entero)
  let red = parseInt(hexColor.slice(1, 3), 16);
  let green = parseInt(hexColor.slice(3, 5), 16);
  let blue = parseInt(hexColor.slice(5, 7), 16);

  // Construir la cadena del color RGB
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return rgbColor;
}

console.log(convertHexaToRgb("#0012f1"));

// TODO: 6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
function convertRgbToHexa(rgbColor) {
  // Extraer los componentes rojo, verde y azul del color RGB
  let rgbValues = rgbColor.match(/\d+/g);
  let red = parseInt(rgbValues[0]);
  let green = parseInt(rgbValues[1]);
  let blue = parseInt(rgbValues[2]);

  // Convertir los componentes a hexadecimal
  let redHex = red.toString(16).padStart(2, '0');
  let greenHex = green.toString(16).padStart(2, '0');
  let blueHex = blue.toString(16).padStart(2, '0');

  // Construir la cadena del color hexadecimal
  let hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
}

console.log(convertRgbToHexa("rgb(255, 165, 0)"));

// 7. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
function generateColor(tipoColor, numeroColores) {
  let arregloColorHexa = [];
  let arregloColorRgb = [];
  let digitos = "0123456789abcdef"

  for (let i = 0; i < numeroColores; i++){
    let colorHexa = "#";

    if (tipoColor == "hexa") {
      for (let j = 0; j < 6; j++){
        let colorRandom = Math.floor(Math.random() * digitos.length);

        colorHexa = colorHexa + digitos.charAt(colorRandom);
      }
      arregloColorHexa.push(colorHexa)

    } else if (tipoColor == "rgb") {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);

      var colorRgb = `rgb(${red}, ${green}, ${blue})`

      arregloColorRgb.push(colorRgb)
    }
  }
  if (tipoColor == "hexa") {
    return arregloColorHexa
  } else if (tipoColor == "rgb") {
    return arregloColorRgb
  }
}
console.log(generateColor("rgb", 3))

// TODO: 8. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
function shuffleArray(arreglo){

  // Recorrer el array desde el último elemento hasta el primero
  for (let i = arreglo.length -1; i >= 0; i--) {
    // Generar un índice aleatorio dentro del rango actual
    let randomIndex = Math.floor(Math.random() * (i + 1));

    // Intercambiar los elementos en las posiciones randomIndex e i
    let temp = arreglo[randomIndex];
    arreglo[randomIndex] = arreglo[i];
    arreglo[i] = temp;
  }

  return arreglo;
}

let nombres = ["Carlos", "Antonio", "Andrea", "Laura"]
console.log(shuffleArray(nombres))

// !9. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
function factorial(numEntero) {
  if (numEntero === 0 || numEntero === 1) {
    return 1;
  } else {
    return numEntero * factorial(numEntero - 1);
  }
}

console.log(factorial(5))

// 10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
function isEmpty(num) {
  
  if (num == null) {
    return "Esta vacio"
  } else {
    return `No esta vacio, el parametro es ${num}`
  }
}

console.log(isEmpty())

// 11. Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
function sum() {
  let sum = 0; 

  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }

  return sum
}

console.log(sum(1, 2, 3))

// 12. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
function sumOfArrayItems(arreglo) {
  let sum = 0;
  for (let i = 0; i < arreglo.length; i++){
    if (typeof (arreglo[i]) === "number") {
      sum += arreglo[i];
    } else {
      return "Los valores del arreglo no son de tipo numero"
    }
  }

  return sum
}

let numbers = [1, 2, 3]
console.log(sumOfArrayItems(numbers))

// 13. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
function average(arreglo) {
  let sumValores = 0;
  let promedio = 0;

  for (let i = 0; i < arreglo.length; i++){
    if (typeof (arreglo[i]) === "number") {
      sumValores += arreglo[i];
      promedio = sumValores / arreglo.length;
    } else {
      return "Los valores del arreglo no son de tipo numero"
    }
  }

  return promedio;
}
let numeros = [1,2,3,4,5]
console.log(average(numeros))

// 14. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
function modifyArray(array) {

  if (array.length < 5) {
    return "elemento no encontrado"
  }
  
  array[4] = array[4].toUpperCase();

  return array
}

let employeds = ["Google", "Facebook", "Amazon", "Apple", "Xiaomi", "Hp"]
console.log(modifyArray(employeds))

// !15. Escribe una función llamada isPrime, que verifica si un número es un número primo.
function isPrime(num) {
  if (num <= 1) {
    return "No es un número primo"
  }
  
  for (let i = 2; i < num; i++){
    if (num % i === 0) {
      return "No es un número primo"
    }
  }

  return "Es un número primo"
}

console.log(isPrime(2))

// TODO: 16. Escriba una función que verifique si todos los elementos son únicos en un array.
function elementosUnicos(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        return "Hay un elemento duplicado";
      }
    }
  }

  return "Todos los elementos son unicos;"
}

let valores = [1, 2, 3, 4, 5, 6, 7]
console.log(elementosUnicos(valores))

// 17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
function mismoTipo(arreglo) {
  let tipoElemento = typeof arreglo[0]
  for (let i = 0; i < arreglo.length; i++){
    if (typeof (arreglo[i]) !== tipoElemento) {
      return "No todos los elementos son del mismo tipo"
    }
  }

  return `Todos los elementos son de tipo ${tipoElemento}`
}
let miArreglo = ["Hola", "Mundo", 3]
console.log(mismoTipo(miArreglo))

// !18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
function isValidVariable(variable) {
  let caracteres = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_"
  
  for (let i = 0; i < variable.length; i++){
    if (!caracteres.includes(variable[i])) {
      return "Variable inválida"
    }
  }
  return "Variable valida"
}
let miVariable = "miVariable";

console.log(isValidVariable(miVariable));

// !19. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
function arrayAleatorio() {
  let arregloGenerado = []

  while (arregloGenerado.length < 7) {
    let numerosAleatorios = Math.floor(Math.random() * 10)

    if (!arregloGenerado.includes(numerosAleatorios)) {
      arregloGenerado.push(numerosAleatorios)
    }
  }

  return arregloGenerado
}
console.log(arrayAleatorio())



const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// 20. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido 
function reverseCountries(arreglo) {
  let copiaArreglo = arreglo.slice();

  return copiaArreglo.reverse();

}
console.log(reverseCountries(countries));