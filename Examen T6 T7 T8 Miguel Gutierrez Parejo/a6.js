const anyadir = document.getElementById("anyadir");
const eliminar = document.getElementById("eliminar");

anyadir.addEventListener("click", function() {
  const texto = prompt("Escribe el texto del nuevo nodo:");
  const nuevoNodo = document.createElement("div");
  nuevoNodo.innerHTML = texto;
  document.body.appendChild(nuevoNodo);
});

eliminar.addEventListener("click", function() {
  const nodos = document.getElementsByTagName("div");
  if (nodos.length > 0) {
    const ultimoNodo = nodos[nodos.length - 1];
    ultimoNodo.remove();
  }
});
