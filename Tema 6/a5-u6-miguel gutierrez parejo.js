const div = document.querySelector("div");

document.querySelector(".ocultar").addEventListener("click", () => {
  div.classList.add("div_oculto");
});

document.querySelector(".mostrar").addEventListener("click", () => {
  div.classList.remove("div_oculto");
});
