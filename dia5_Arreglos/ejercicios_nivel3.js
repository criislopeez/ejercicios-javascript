// 1. El siguiente es un array de 10 edades de estudiantes:
// - Ordene el array y encuentre la edad mínima y máxima
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());

const valorMax = Math.max(...ages);
console.log(valorMax);

const valorMin = Math.min(...ages);
console.log(valorMin);

// - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
let total = 0;

let media = ages.map(numbers =>
  total += numbers
);

const resultado = total / ages.length;
console.log(resultado);

// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let promedio = ages.reduce((acu, ele) => acu + ele, 0);
console.log(promedio / ages.length);

// - Encuentre el rango de las edades (max menos min)
const rangoEdad = valorMax - valorMin;
console.log(rangoEdad);

// - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let compar1 = valorMin - promedio;
console.log(Math.abs(compar1));
let compar2 = valorMax - promedio;
console.log(Math.abs(compar2));


// 1. Cortar los diez primeros países de la array de países
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

// 1. Cortar los diez primeros países de la array de países
let primerosDiex = countries.slice(0, 10);
console.log(countries);

// 2. Encuentre el país o países de en medio en el array de países
const paisesMedio = Array();

if (countries.length % 2 == 0) {
  const mitad = countries.length / 2; // siempre da entero

  paisesMedio.push(countries[mitad]); // guardas el que esta a la mitad derecha
  paisesMedio.push(countries[mitad - 1]); // guarda el que esta a la mitad izquierda
} else {
  const mitad = Math.floor(countries.length / 2); // lo redondea para abajo
  paisesMedio.push(countries[mitad]);
}

console.log(paisesMedio);

// 3. Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
let primerArray = Array();
let segundoArray = Array();

if (countries.length % 2 == 0) { // si la longitud de paises es par...
  const mitad = countries / 2;

  primerArray = countries.slice(0, mitad);
  segundoArray = countries.slice(mitad);

  console.log(primerArray);
  console.log(segundoArray);
} else {
  // Si es impar, agregar un país más al primer array antes de dividirlo en dos partes iguales
  const mitad = Math.floor(countries.length / 2) + 1;

  primerArray = countries.slice(0, mitad);
  segundoArray = countries.slice(mitad);

  console.log(primerArray);
  console.log(segundoArray);
}