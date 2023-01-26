function profe() {
    var p = document.querySelector('select').value;
    switch (p) {
        case "mates":
            alert("Se enviará a Paco");
            break;
        case "lengua":
            alert("Se enviará a Pepe");
            break;
        case "ingles":
            alert("Se enviará a Antonia");
            break;
        case "sociales":
            alert("Se enviará a Manolo");
            break;
       default:
            break;

    }
}

function diaPreferido() {
    var dias = document.querySelectorAll('input[type="checkbox"]:checked')
    var ultimo = dias[dias.length-1].name;
     alert("El día preferente es: " + ultimo);
 }

function cambiarColor(color) {
    document.body.style.backgroundColor = color.id;
}

function blanco() {
    document.body.style.backgroundColor = "white"
}
