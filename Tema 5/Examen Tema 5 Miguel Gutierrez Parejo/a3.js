window.onload = function(){ document.onkeydown = color }

function color() {
    document.getElementById("pepe")
    var tecla = objeto.which;

    switch (tecla) {
        case 65:
            pepe.style.background = "#f9ff33"
            break;

        case 82:
            pepe.style.backgroundcolor = "#ff5733"
            break;

        case 78:
            pepe.style.backgroundcolor = "#000000"
            break;

        case 86:
            pepe.style.backgroundcolor = "#68ff33"
            break;

        default:
            break;
    }
}