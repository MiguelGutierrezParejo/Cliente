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

function mostrarResultados(){
    var solo = document.getElementById("solop");
    var leche = document.getElementById("lechep");
    var descafeinado = document.getElementById("descafeinadop");
    var hielo = document.getElementById("hielop");
    let total = 0;
    ["solo", "leche", "descafeinado", "hielo"].forEach(e =>{
        total += getCookie(e) !== "" ? parseInt(getCookie(e)) : 0;
    });

    solo.max= total;
    solo.value = getCookie("solo") !== "" ? parseInt(getCookie("solo")) : 0;
    leche.max= total;
    leche.value = getCookie("leche") !== "" ? parseInt(getCookie("leche")): 0;
    descafeinado.max= total;
    descafeinado.value = getCookie("descafeinado") !== "" ? parseInt(getCookie("descafeinado")) : 0;
    hielo.max= total;
    hielo.value = getCookie("hielo") !== "" ? parseInt(getCookie("hielo")) : 0;
  
}

function votar(){
    var voto = document.getElementsByName('cafe');
    for(let i = 0; i < voto.length; i++){
        if(voto[i].checked){
            var nombre = voto[i].value;
        }
    } 
    let valor = getCookie(nombre) !== "" ? parseInt(getCookie(nombre)): 0;
    setCookie(nombre, valor + 1, 100000000);
 
}


function iniciar(){
    
    document.getElementById("votar").addEventListener('click', votar);
    
    mostrarResultados();
    
}

window.onload = iniciar;