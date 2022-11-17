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

function paco() {
    window.open("auxiliar.html")
}

function mostrar() {
    alert(a)
}

function primera() {
    alert(a[0])
}

function ultimo() {
    alert(a[a.length - 1])
}

function long() {
    alert(a.length)
}

function ordenar() {
    alert(a.sort())
}

function reversa() {
    a.sort()
    alert(a.reverse())
}
