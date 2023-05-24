// 1. Declare una función fullName e imprima su nombre completo.
function fullName() {
  let firstName = "Cristina"
  let lastName = "López"
  console.log(`${firstName} ${lastName}`);
}

fullName();

// 2. Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(fullName2("Cristina", "López"))

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
function addNumbers(num1, num2) {
  return num1 + num2
}
console.log(addNumbers(2, 2))

// 4. El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
function areaOfRectangle(lenght, width) {
  let area = lenght * width
  return area
}
console.log(areaOfRectangle(6, 3))

// 5. El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
function perimeterOfRectangle(lenght, width) {
  let perimeter = 2 * (lenght + width);
  return perimeter
}
console.log(perimeterOfRectangle(8, 9))

// 6. El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
function volumeOfRectPrism(lenght, width, height) {
  let volume = lenght * width * height;
  return volume
}
console.log(volumeOfRectPrism(8, 10, 23))

// 7. El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
function areaOfCircle(radio) {
  let area = Math.PI * radio * radio;
  return area
}
console.log(areaOfCircle(2))

// 8. La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
function circumOfCircle(radio) {
  let circumference = 2 * Math.PI * radio;
  return circumference
}
console.log(circumOfCircle(4))

// 9. La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
function density(mass, volume) {
  return mass/volume
}
console.log(density(2, 3))

// 10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
function velocidad(distanciaRecorrida, tiempoTotal) {
  let speed = distanciaRecorrida / tiempoTotal;
  return speed;
}
console.log(velocidad(200, 3))

// 11. El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
function weight(mass, gravity) {
  return mass * gravity
}
console.log(weight(200, 50))

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
function convertCelsiusToFahrenheit(gradoCelcius) {
  let gradoFarenheit = (gradoCelcius * 9 / 5) + 32;
  return gradoFarenheit
}
console.log(convertCelsiusToFahrenheit(32))

// 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
function imc(pesoKg, altura) {
  let peso = pesoKg * 10000
  let imc = Math.round(peso / Math.pow(altura, 2))

  if (imc < 18.6) {
    return `Peso bajo = ${imc}`
  } else if (imc >= 18.5 && imc <= 24.9) {
    return `Peso normal = ${imc}`
  } else if (imc >= 25 && imc <= 29.9) {
    return `Sobrepeso = ${imc}`
  } else if (imc >= 30) {
    return `Obeso = ${imc}`
  }
}

console.log(imc(55, 161))

// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
function checkSeason(mes) {
  
  switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
      return "Invierno";
      break;
    case "Abril":
    case "Mayo":
    case "Junio":
      return "Primavera";
      break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
      return "Verano";
      break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      return "Otoño";
      break;
    default:
      break;
  }
}
console.log(checkSeason("Marzo"))

// 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else if (num3 > num1 && num3 > num2) {
    return num3
  }
}
console.log(findMax(0, -10, -2))