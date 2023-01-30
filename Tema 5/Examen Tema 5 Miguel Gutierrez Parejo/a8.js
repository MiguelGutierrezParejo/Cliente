const DATOS = ["nombre", "apellido", "edad", "dni", "sexo", "lugar"];

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

function validarDNI(){
    var elemento = document.getElementById("dni");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo DNI no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("El patrón DNI no es el correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Nombre no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("El patrón Nombre no es el correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarApellido(){
    var elemento = document.getElementById("apellido");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Apellido no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("El patrón Apellido no es el correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Edad no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("El patrón Edad no es el correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validarLugar(){
    var elemento = document.getElementById("lugar");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo Lugar de nacimiento no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("El patrón Lugar de Nacimiento no es el correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validar(e){
    if(validarNombre() && validarApellido()&& validarDNI() && validarEdad()
       && validarLugar()){           
           DATOS.forEach(elemento => {
               let dato = document.getElementById(elemento);
               setCookie(dato.name, dato.value, 1000000);
           });
            return true
    } else{
        e.preventDafault();
        return false;
    }
}

function iniciar(){
    document.getElementById("guardar").addEventListener('click', validar, false);
    document.getElementById("ver").addEventListener('click', () => {
        var dni = document.getElementById("dni");
        (dni.type =="password")? dni.type= "text": dni.type= "password"; 
    });
}

window.onload = iniciar;