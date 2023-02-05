function paco() {
    let notaAlumno = [];
let alumnos = [];

for (let i = 0; i < 5; i++) {
    let alumno = prompt("Introduce el nombre del alumno " + (i + 1));
    let studentScores = [];

    for (let j = 0; j < 3; j++) {
        let score = parseInt(
            prompt("Introcude la nota del modulo " + (j + 1) + " de " + alumno)
        );
        studentScores.push(score);
    }

    alumnos.push(alumno);
    notaAlumno.push({ name: alumno, scores: studentScores });
}

let table = document.createElement("table");
let header = table.createTHead();
let headerRow = header.insertRow();

headerRow.insertCell().innerHTML = "Nombre";
headerRow.insertCell().innerHTML = "Modulo 1";
headerRow.insertCell().innerHTML = "Modulo 2";
headerRow.insertCell().innerHTML = "Modulo 3";

let body = table.createTBody();

for (let i = 0; i < notaAlumno.length; i++) {
    let student = notaAlumno[i];
    let row = body.insertRow();
    row.insertCell().innerHTML = student.name;
    row.insertCell().innerHTML = student.scores[0];
    row.insertCell().innerHTML = student.scores[1];
    row.insertCell().innerHTML = student.scores[2];
}

document.body.appendChild(table);
}
