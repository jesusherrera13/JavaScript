let frutas = ["Manzana", "Plátano"];

console.log("Definir el array:");
console.log(frutas, "");

let primero = frutas[0];
let ultimo = frutas[frutas.length - 1];

console.log("Primer elemento:", primero);
console.log("Último elemento:", ultimo);
console.log("");

let item = "Mango";
frutas.push(item);
console.log("Agregar nuevo elemento al final: ", item);

console.log("Recorrer array");
frutas.forEach((fruta,i) => {
	console.log(i, fruta);
});

console.log("");
item = "Fresa";

frutas.unshift(item);

console.log("Agregar nuevo elemento al inicio: ", item);

console.log("Recorrer array");

for(var i in frutas) {
	console.log(i, frutas[i]);
}


frutas.shift();

console.log("Eliminar primer elemento ");

frutas.forEach((item, i) => {
	console.log(i, item);
});
