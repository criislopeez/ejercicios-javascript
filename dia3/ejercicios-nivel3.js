// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let actual = new Date();
let conversionMeses = ("0" + (actual.getMonth() + 1));
let conversionDias = ("0" + (actual.getDate()));
console.log(`${actual.getFullYear()}-${conversionMeses}-${conversionDias} ${actual.getHours()}:${actual.getMinutes()}`);