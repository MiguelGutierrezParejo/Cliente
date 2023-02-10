
/* PETICIÓN */


function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "resultados.txt", true);
    xhr.onreadystatechange = function () {
        // console.log(xhr.readyState);
        if (xhr.status == 200) {
            var resultado = document.getElementById("resultado");
            // resultado.innerHTML = xhr.responseText;
            let valorArchivo = xhr.responseText;
            arrayValores = valorArchivo.split("||");
            console.log(arrayValores);
        }
    }
    
    xhr.send();
    
    // var resultado = valorArchivo.split("||")
    // console.log(resultado);
    
};

/* PROGRAMA */

/*
1. Actualizar variables (array).
2. Cargamos los radios y comprobamos si están checked.
3. Actualizamos la variable checkeada dentro del array.
4. Volcamos los nuevos datos en el archivo.
5. Imprimimos por pantalla los resuldatos.

*/

let input = document.querySelector('input[type="radio"]:checked');
alert(input.id);


function manejoArray(madr, barc, atlet, sevilla) {
    this.madrid = madr;
    this.barcelona = barc;
    this.atleti = atlet;
    this.sevilla = sevilla;

    this.equipos {
        madrid
    }
}




var btnVotar = document.getElementById('votar');
btnVotar.addEventListener('click', cargarContenido);

















