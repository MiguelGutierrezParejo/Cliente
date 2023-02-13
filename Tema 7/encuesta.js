
/* PETICIÓN */


function votos(voto) {
    xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange=function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(encuesta).innerHTML=this.responseText
        }
    }
    xmlhttp.open("GET", "encuesta_voto.php?voto=" + voto, true)
}

/* PROGRAMA */

/*
1. Actualizar variables (array).
2. Cargamos los radios y comprobamos si están checked.
3. Actualizamos la variable checkeada dentro del array.
4. Volcamos los nuevos datos en el archivo.
5. Imprimimos por pantalla los resuldatos.

*/

// let input = document.querySelector('input[type="radio"]:checked');
// alert(input.id);


// function manejoArray(madr, barc, atlet, sevilla) {
//     this.madrid = madr;
//     this.barcelona = barc;
//     this.atleti = atlet;
//     this.sevilla = sevilla;
// }




// var btnVotar = document.getElementById('votar');
// btnVotar.addEventListener('click', cargarContenido);
