var a = []

function juan() {
    var menu = prompt("Introduce una palabra:")
    a.push(menu)

    while (menu != "0") {
        var menu = prompt("Introduce otra palabra.\nPulse 0 para salir")
        a.push(menu)
    }
    a.pop()
}

function mostrar() {
    alert(a)
}

function paco() {
    //Muestra las palabras
    alert(a)

    //Muestra la primera palabra
    alert(a[0])

    //Mutesra la última palabra
    alert(a[a.length - 1])

    //Muestra la longitud
    alert(a.length)

    //Ordena el array
    alert(a.sort())

    //Ordena al revés
    a.sort()
    alert(a.reverse())
}
