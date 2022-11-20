var a = [];

//TODO: probar a añadir con un alert
function anyadir() {
    if (a.length < 5) {

        var datos = [
            document.getElementById("nombre").value,
            document.getElementById("nota1").value,
            document.getElementById("nota2").value,
            document.getElementById("nota3").value,
        ]
        a.push(datos);
        if(a.length == 5){
            mostrar(a);
            a= [];
        };
    }

    function crearTabla(t, d) {
        for (let e of d) {
          let row = t.insertRow();
          for (key in e) {
            let cell = row.insertCell();
            let text = document.createTextNode(e[key]);
            cell.appendChild(text);
          }
        }
      }

    function mostrar(x) {
        var tabla = document.getElementById("resultado");
        tabla.innerHTML="<tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th></tr>";
        crearTabla(tabla, x);
    }
}
