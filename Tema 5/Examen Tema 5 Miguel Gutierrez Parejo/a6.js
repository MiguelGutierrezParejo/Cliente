function validarDNI(){
    var elemento = document.getElementById("dni");
    if(!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            elemento.setCustomValidity("El campo DNI no puede estar vacío")
        }

        if (elemento.validity.patternMismatch){
            elemento.setCustomValidity("Debe introducir el patrón correcto");
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
            elemento.setCustomValidity("Debe introducir el patrón correcto");
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
            elemento.setCustomValidity("Debe introducir el patrón correcto");
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
            elemento.setCustomValidity("Debe introducir el patrón correcto");
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
            elemento.setCustomValidity("Debe introducir el patrón correcto");
        }
        elemento.value = "";
        return false;
    }
    return true;
}

function validar() {
    validarNombre()
    validarApellido()
    validarDNI()
    validarEdad()
    validarLugar()
}

function iniciar(){
    document.getElementById("guardar").addEventListener('click', validar, false);
    document.getElementById("ver").addEventListener('click', () => {
        var dni = document.getElementById("dni");
        (dni.type =="password")? dni.type= "text": dni.type= "password"; 
    });
}

window.onload = iniciar;