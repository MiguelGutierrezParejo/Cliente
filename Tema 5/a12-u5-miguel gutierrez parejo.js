const DATOS = ["dni", "nombre", "fecha", "email", "web", "contrasenya", "confirmar"];

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function mostrarCookies(){
    DATOS.forEach(dato => {
        alert(`${dato} = ${getCookie(dato)}`);
    });
}

function comprobarDni() {
    var dni = document.getElementById("dni")
    var regex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/

    if (!regex.test(dni)) {
        alert("El DNI introducido no es correcto")
        dni = ""
    }
}

function comprobarNombre() {
    var nombre = document.getElementById("nombre")
    var regex = /^[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/

    if (!regex.test(nombre)) {
        alert("El nombre introducido no es correcto")
        nombre = ""
    }
}

function comprobarEmail() {
    var email = document.getElementById("email")
    var regex = /^[a-zA-Z0-9_-]{3,50}@[a-zA-Z]{3,50}\.[a-z]{2,3}$/

    if (!regex.test(email)) {
        alert("El email introducido no es correcto")
        email = ""
    }
}

function comprobarFecha() {
    var fecha = document.getElementById("nacimiento")
    var regex = /^$[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}/

    if (!regex.test(fecha)) {
        alert("La fecha introducida no es correcta")
        fecha = ""
    }
}

function comprobarWeb() {
    var web = document.getElementById("web")
    var regex = /^$[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}/

    if (!regex.test(web)) {
        alert("La web introducida no es correcta")
        web = ""
    }
}

function comprobarContrasenya() {
    var contrasenya = document.getElementById("contrasenya")
    var regex = /^$[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}/

    if (!regex.test(contrasenya)) {
        alert("La contrasenya introducida no es correcta")
        contrasenya = ""
    }
}

function comprobarConfirmacion() {
    var confirmar = document.getElementById("confirmar")
    var contrasenya = document.getElementById("contrasenya")

    if (confirmar !== contrasenya) {
        alert("Las contraseñas no coinciden")
        confirmar = ""
        contrasenya = ""
    }
}

function validar() {
    if (comprobarDni() && comprobarNombre() && comprobarFecha() && comprobarEmail() &&
        comprobarWeb() && comprobarContrasenya() && comprobarConfirmacion()) {
            DATOS.forEach(elemento => {
                let dato = document.getElementById(elemento);
                setCookie(dato.name, dato.value, 1000000);
            });
    }
}

function iniciar() {
    document.getElementById("guardar").addEventListener('click', validar, false)
    document.getElementById("ver").addEventListener('click', mostrarCookies, false)
}

window.onload = iniciar;
