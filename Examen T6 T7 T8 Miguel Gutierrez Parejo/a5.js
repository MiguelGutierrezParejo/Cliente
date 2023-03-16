function paco() {
    let valoracion = [];
let marcas = [];

for (let i = 0; i < 5; i++) {
    let marca = prompt("Introduce el nombre de la marca " + (i + 1));
    let notaMarca = [];

    for (let j = 0; j < 3; j++) {
        let score = parseInt(
            prompt("Introcude la valoracion en el siguiente orden:\n1.Diseño\n2.Precios\n3.Calidad")
        );
        notaMarca.push(score);
    }

    marcas.push(marca);
    valoracion.push({ name: marca, scores: notaMarca });
}

let table = document.createElement("table");
let header = table.createTHead();
let headerRow = header.insertRow();

headerRow.insertCell().innerHTML = "Nombre";
headerRow.insertCell().innerHTML = "Diseño";
headerRow.insertCell().innerHTML = "Precios";
headerRow.insertCell().innerHTML = "Calidad";

let body = table.createTBody();

for (let i = 0; i < valoracion.length; i++) {
    let brand = valoracion[i];
    let row = body.insertRow();
    row.insertCell().innerHTML = brand.name;
    row.insertCell().innerHTML = brand.scores[0];
    row.insertCell().innerHTML = brand.scores[1];
    row.insertCell().innerHTML = brand.scores[2];
}

document.body.appendChild(table);
}
