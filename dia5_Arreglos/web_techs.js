const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
let comprobar = webTechs.some(tech => tech === "Sass")

if (comprobar) {
  console.log("Sass es un preproceso de CSS")
} else {
  webTechs.push()
  console.log(webTechs);
}