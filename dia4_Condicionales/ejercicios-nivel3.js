// 1. Escribe un programa que diga el número de días en un mes.
let mes = prompt("Introduce un mes: ").toLowerCase();
let diasMeses;

switch (mes) {
  case "enero": 
    /**Cuando le indicas 0 en el parámetro de días al constructor, 
     * lo interpreta como "el día anterior al 1" 
     * es decir el último día del mes pasado
     */
    diasMeses = new Date(2023, 1, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "febrero": 
    diasMeses = new Date(2023, 2, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "marzo": 
    diasMeses = new Date(2023, 3, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "abril": 
    diasMeses = new Date(2023, 4, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "mayo": 
    diasMeses = new Date(2023, 5, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "junio": 
    diasMeses = new Date(2023, 6, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "julio": 
    diasMeses = new Date(2023, 7, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "agosto": 
    diasMeses = new Date(2023, 8, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "septiembre": 
    diasMeses = new Date(2023, 9, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "octubre": 
    diasMeses = new Date(2023, 10, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "noviembre": 
    diasMeses = new Date(2023, 11, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
  case "diciembre": 
    diasMeses = new Date(2023, 12, 0).getDate();
    console.log(`${mes} tiene ${diasMeses} días.`);
    break;
}

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
let mesBisiesto = prompt("Introduce un mes: ").toLowerCase();
let diasMesesBisiesto;

switch (mesBisiesto) {
  case "enero": 
    diasMesesBisiesto = new Date(2020, 1, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "febrero": 
    diasMesesBisiesto = new Date(2020, 2, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "marzo": 
    diasMesesBisiesto = new Date(2020, 3, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "abril": 
    diasMesesBisiesto = new Date(2020, 4, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "mayo": 
    diasMesesBisiesto = new Date(2020, 5, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "junio": 
    diasMesesBisiesto = new Date(2020, 6, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "julio": 
    diasMesesBisiesto = new Date(2020, 7, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "agosto": 
    diasMesesBisiesto = new Date(2020, 8, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "septiembre": 
    diasMesesBisiesto = new Date(2020, 9, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "octubre": 
    diasMesesBisiesto = new Date(2020, 10, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "noviembre": 
    diasMesesBisiesto = new Date(2020, 11, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
  case "diciembre": 
    diasMesesBisiesto = new Date(2020, 12, 0).getDate();
    console.log(`${mesBisiesto} tiene ${diasMesesBisiesto} días.`);
    break;
}
