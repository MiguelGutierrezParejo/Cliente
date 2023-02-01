var d = document.createElement("div")

function crearNodos() {
    var t = prompt("Introduce el texto que quieras escribir")
    var contenido = document.createTextNode(t)
    d.appendChild(contenido)
    document.body.appendChild(d)
}

function borrarNodos() {
    document.body.removeChild(d)
}