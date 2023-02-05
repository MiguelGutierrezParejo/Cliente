const boton = document.getElementById("boton");
const inputs = document.querySelectorAll("input[type='text']");

boton.addEventListener("click", function() {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.disabled) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  }
});
