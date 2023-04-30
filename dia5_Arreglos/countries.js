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

// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
let comprobar = countries.some(contrie => contrie === "Ethiopia");

if (comprobar) {
  let mayus = countries[4].toString();
  console.log(mayus.toUpperCase());
}

