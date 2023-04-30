// 1. Declara un array vacío.
const arrayVacio = new Array();
console.log(arrayVacio);

// 2. Declara un array com mas de 5 elementos.
let habitacion = ["cama", "canape", "ordenador", "escritorio", "boligrafos", "pizarra"]
console.log(habitacion);

// 3. Encuentra la longitud de tu array.
console.log(habitacion.length);

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let primerElemento = habitacion[0];
console.log(primerElemento);
let elementoMedio = habitacion[2];
console.log(elementoMedio);
let elementoFinal = habitacion[habitacion.length - 1];
console.log(elementoFinal);

// 5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = [2, "hola", true, "Ana", null, undefined, ["1", "2", "3"]]
console.log(mixedDataTypes.length);

// 6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7. Imprima el array usando console.log().
console.log(itCompanies);

// 8. Imprima el número de empresas en el array.
console.log(itCompanies.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1])
console.log("---");

// 10. Imprime cada empresa.
for (let i = 0; i < itCompanies.length; i++){
  console.log(itCompanies[i])
}

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
itCompanies[0] = "FACEBOOK"
itCompanies[1] = "GOOGLE"
itCompanies[2] = "MICROSOFT"
itCompanies[3] = "APPLE"
itCompanies[5] = "ORACLE"
itCompanies[6] = "AMAZON"
console.log(itCompanies)

// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(itCompanies.join(", ") + " son grandes empresas de TI");

// 13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let existeEmpresa = itCompanies.indexOf("FACEBOOK");

if (existeEmpresa === -1) {
  console.log("No existe la empresa")
} else {
  console.log("Existe " + itCompanies[0] + " en el indice " + existeEmpresa)
}

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter()
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let arregloVacio = Array();

itCompanies.forEach((nombre) => {
  let contador = 0;

  nombre.split("").forEach((letra) => {
    if(letra == 'o'){
      contador++;
    }
  });

  if (contador == 2) {
    arregloVacio.push(nombre)
  }
}
); 

console.log(arregloVacio);



// 15. Ordene el array usando el método sort()
console.log(itCompanies.sort());

// 16. Invierte la array usando el método reverse()
console.log(itCompanies.reverse());

// 17. Cortar las primeras 3 empresas del array
console.log(itCompanies.slice(0, 3))

// 18. Cortar las últimas 3 empresas del array
console.log(itCompanies.slice(4, 7));

// 19. Cortar la empresa o empresas intermedias de TI del array
console.log(itCompanies.slice(3, 4));

// 20. Eliminar la primera empresa de TI del array
itCompanies.shift()
console.log(itCompanies);

// 21. Eliminar la empresa o empresas intermedias de TI del array
itCompanies.splice(2, 2);
console.log(itCompanies);

// 22. Elimine la última empresa de TI del array
itCompanies.pop();
console.log(itCompanies);

// 23. Eliminar todas las empresas de TI
itCompanies.splice(0,7);
console.log(itCompanies);