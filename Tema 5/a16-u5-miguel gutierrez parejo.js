function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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

function mostrarResultados(){
    var ios = document.getElementById("barra-ios");
    var android = document.getElementById("barra-android");
    var windows = document.getElementById("barra-windows");
    var otros = document.getElementById("barra-otro");
    let total = 0;
    ["ios", "android", "windows", "otro"].forEach(e =>{
        total += getCookie(e) !== "" ? parseInt(getCookie(e)) : 0;
    });

    ios.max= total;
    ios.value = getCookie("ios") !== "" ? parseInt(getCookie("ios")) : 0;
    android.max= total;
    android.value = getCookie("android") !== "" ? parseInt(getCookie("android")): 0;
    windows.max= total;
    windows.value = getCookie("windows") !== "" ? parseInt(getCookie("windows")) : 0;
    otros.max= total;
    otros.value = getCookie("otro") !== "" ? parseInt(getCookie("otro")) : 0;

}

function votar(){
    var voto = document.getElementsByName('sistema');
    for(let i = 0; i < voto.length; i++){
        if(voto[i].checked){
            var nombre = voto[i].value;
        }
    }
    let valor = getCookie(nombre) !== "" ? parseInt(getCookie(nombre)): 0;
    setCookie(nombre, valor + 1, 100000000);

}
