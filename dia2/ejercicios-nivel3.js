// 1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let oracion1 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.';
console.log(oracion1.match(/amor/gi));
let amor = oracion1.match(/amor/gi);
console.log(amor.length);

// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion2 = 'No puedes terminar una oración con porque porque porque es una conjunción'
let porque = oracion2.match(/porque/gi);
console.log(porque.length);

// 3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let limpiar = sentence.replace(/%/g, " ");
limpiar = sentence.replace(/@/g, " ");
console.log(limpiar);

// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let num1 = texto.slice(7, 13); // '5000'
let convertirNum1 = parseInt(num1); // 5000
let num2 = texto.slice(53, 59); // '10000'
let convertirNum2 = parseInt(num2); // 10000
let num3 = texto.slice(85, 91); // '15000'
let convertirNum3 = parseInt(num3); // 15000
let calculo = convertirNum1 + convertirNum2 + convertirNum3 * 12;
console.log(calculo);