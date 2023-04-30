// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
let edad = prompt("Ingrese su edad");
if (edad >= 18) {
  console.log("Tiene la edad suficiente para conducir.");
} else {
  console.log(`Te faltan ${18-edad} años para conducir.`);
}

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
let myAge = prompt("Ingrese su propia edad");
let yourAge = prompt("Ingresa la edad de la otra persona");
if (myAge < yourAge) {
  console.log(`Eres ${yourAge-myAge} años mayor que yo`);
} else {
  console.log(`Soy ${myAge-yourAge} añor mayor que tu`);
}

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
// Usando if else
let a = 4;
let b = 3;
if (a > b) {
  console.log(`A=${a} es mayor que B=${b}`);
} else {
  console.log(`B=${b} es mayor que A=${a}`);
}
// Operador ternario.
a > b ? `A=${a} es mayor que B=${b}` : `B=${b} es mayor que A=${a}`;

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
let numero = prompt("Introduce un número");
if (numero%2 == 0) {
  console.log(`${numero} es un número par`);
} else {
  console.log(`${numero} es un número impar`);
}