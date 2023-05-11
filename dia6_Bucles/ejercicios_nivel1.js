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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
console.log("--Array 1 - FOR--")
for (let i = 0; i < countries.length; i++){
  console.log(countries[i])
} 

console.log("--Array 1 - WHILE--")
let contador = 0;
while (contador < countries.length) {
  console.log(countries[contador]);
  contador++;
}

console.log("--Array 1 - DO WHILE--");
contador = 0;
do {
  console.log(countries[contador]);
  contador++;
}while(contador < countries.length)

console.log("----")


console.log("--Array 2 - FOR--")
for (let j = 0; j < webTechs.length; j++){
  console.log(webTechs[j])
}

console.log("--Array 2 - WHILE--");
contador = 0;
while (contador < webTechs.length) {
  console.log(webTechs[contador]);
  contador++;
}

console.log("--Array 2 - DO WHILE--");
contador = 0;
do {
  console.log(webTechs[contador]);
  contador++;
}while(contador < webTechs.length)

console.log("----")

console.log("--Array 3  - FOR--")
for (let k = 0; k < mernStack.length; k++){
  console.log(mernStack[k])
}

console.log("--Array 3 - WHILE--");
contador = 0;
while (contador < mernStack.length) {
  console.log(mernStack[contador]);
  contador++
}

console.log("--Array 3 - DO WHILE--");
contador = 0;
do {
  console.log(mernStack[contador]);
  contador++
} while (contador < mernStack.length)

console.log("----")

// 3. Itera de 0 a n usando el bucle for
let n = 5;
for (let i = 0; i < n; i++){
  console.log(countries[i]);
}

// 4. Escribe un bucle que haga el siguiente patrón usando console.log():
let numPisos = 7;
let piso = "";
for (let i = 0; i < numPisos; i++){
  piso = piso + "#";
  console.log(piso)
}

// 5. Usa un bucle para imprimir el siguiente patrón:
for (let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`);
}

// 6. Usando un bucle imprime el siguiente patrón:
console.log("i\t\ti^2\t\ti^3");
for (let i = 0; i <= 10; i++){
  console.log(`${i}\t\t${i**2}\t\t${i**3}`);
}

// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
console.log("Números pares hasta el 100");
for (let i = 0; i <= 100; i++){
  if(i%2 == 0){
    console.log(i)
  }
}

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++){
  if(i%2 == 1){
    console.log(i)
  }
}

// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
for (var i = 0; i <= 100; i++){
  var esPrimo = true;

  if (i === 0 || i === 1) {
    esPrimo = false;
  }

  for (let j = 2; j < i; j++){
    if (i % j === 0) {
      esPrimo = false;
      break;
    } 
  }

  if (esPrimo) {
    console.log(i);
  }
}

// 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma = 0;

for (let i = 0; i <= 100; i++) {
  suma = suma + i;
}

console.log(`La suma de todos los números de 0 a 100 es ${suma}`);

// 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumaPares = 0;
let sumaImpares = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumaPares = sumaPares + i;
  }if (i % 2 == 1) {
    sumaImpares = sumaImpares + i;
  } 
}

console.log(`La suma de todos los pares de 0 a 100 es ${sumaPares}. Y la suma de todos los impares de 0 a 100 es ${sumaImpares}`);

// 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
let numeros = [];
sumaPares = 0;
sumaImpares = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumaPares = sumaPares + i;
  }if (i % 2 == 1) {
    sumaImpares = sumaImpares + i;
  } 
}
numeros.push(sumaPares)
numeros.push(sumaImpares)
console.log(numeros);

// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let numerosAleatorios = [];
let aleatorio;
for (let i = 0; i < 5; i++){
  aleatorio = Math.random();
  
  numerosAleatorios.push(aleatorio)
}
console.log(numerosAleatorios);

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let numerosAleatoriosUnicos = [];
let aleatorioUnico;
for (let i = 0; i < 5; i++){
  aleatorioUnico = Math.floor(Math.random() * 10);
  
  numerosAleatoriosUnicos.push(aleatorioUnico)
}
console.log(numerosAleatoriosUnicos);

// 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
let script = [];
let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"
let id = "";

for (let i = 0; i < 6; i++){
  var idAleatorio = Math.floor(Math.random() * caracteres.length)

  id = id + caracteres.charAt(idAleatorio)
}
script.push(id)
console.log(script);

