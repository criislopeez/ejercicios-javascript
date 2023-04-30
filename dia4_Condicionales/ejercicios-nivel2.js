// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
let puntaje = parseInt(prompt("Introduce tu puntaje del 0 al 100"));

switch (true) {
  case ((puntaje >= 80) && (puntaje <= 100)):
    console.log("Puntaje A");
    break;
  case ((puntaje >= 70) && (puntaje <= 89)):
    console.log("Puntaje B");
    break;
  case ((puntaje >= 60) && (puntaje <= 69)):
    console.log("Puntaje C");
    break;
  case ((puntaje >= 50) && (puntaje <= 59)):
    console.log("Puntaje D");
    break;
  case ((puntaje >= 0) && (puntaje <= 49)):
    console.log("Puntaje F");
    break;
  default:
    console.log("Introdujiste mal el puntaje");
    break;
}

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
let mes = prompt("Introduce el mes (de enero a diciembre)");

switch (true) {
  case ((mes == "septiembre") || (mes == "octubre") || (mes == "noviembre")):
    console.log("Otoño");
    break;
  case ((mes == "diciembre") || (mes == "enero") || (mes == "febrero")):
    console.log("Invierno");
    break;
  case ((mes == "marzo") || (mes == "abril") || (mes == "mayo")):
    console.log("Primavera");
    break;
  case ((mes == "junio") || (mes == "julio") || (mes == "agosto")):
    console.log("Verano");
    break;
  default:
    console.log("introdujiste mal el mes");
    break;
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
let diaSemana = prompt("Que día de la semana es hoy").toLowerCase();

switch (true) {
  case ((diaSemana == "lunes") || (diaSemana == "martes") || (diaSemana == "miercoles") || (diaSemana == "jueves") || (diaSemana == "viernes")):
    console.log(`El ${diaSemana} es un día laborable.`);
    break;
  case ((diaSemana == "sábado") || (diaSemana == "domingo")):
    console.log(`El ${diaSemana} es fin de semana.`);
    break;
  default:
    console.log("Introdujiste mal el día de la semana");
    break;
}