class Vehiculo {
    constructor(marca, modelo, color, anioFabricacion) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.anioFabricacion = anioFabricacion;
    }
  }

  // Introduce 5 vehículos diferentes
  const car1 = new Vehiculo("Toyota", "Camry", "Blanco", 2018);
  const car2 = new Vehiculo("Honda", "Civic", "Negro", 2019);
  const car3 = new Vehiculo("Tesla", "Model 3", "Azul", 2020);
  const car4 = new Vehiculo("Ford", "Mustang", "Rojo", 2021);
  const car5 = new Vehiculo("Chevrolet", "Camaro", "Amarillo", 2022);


  const vehiculos = [car1, car2, car3, car4, car5];

// Crea un botón
const btn = document.createElement("button");
btn.innerHTML = "Generar tabla";

// Agrega el botón a la página web
document.body.appendChild(btn);

// Añade un evento click al botón
btn.addEventListener("click", function() {
  // Crea una tabla
  const table = document.createElement("table");

  // Crea una fila para los títulos de columna
  const filaCabecera = document.createElement("tr");
  const tituloMarca = document.createElement("th");
  tituloMarca.innerHTML = "Marca";
  filaCabecera.appendChild(tituloMarca);
  const tituloModelo = document.createElement("th");
  tituloModelo.innerHTML = "Modelo";
  filaCabecera.appendChild(tituloModelo);
  const tituloColor = document.createElement("th");
  tituloColor.innerHTML = "Color";
  filaCabecera.appendChild(tituloColor);
  const tituloAnyo = document.createElement("th");
  tituloAnyo.innerHTML = "Año fabricación";
  filaCabecera.appendChild(tituloAnyo);
  table.appendChild(filaCabecera);

  // Crea una fila para cada vehículo
  vehiculos.forEach(function(coche) {
    const fila = document.createElement("tr");
    const marca = document.createElement("td");
    marca.innerHTML = coche.marca;
    fila.appendChild(marca);
    const modelo = document.createElement("td");
    modelo.innerHTML = coche.modelo;
    fila.appendChild(modelo);
    const color = document.createElement("td");
    color.innerHTML = coche.color;
    fila.appendChild(color);
    const anyo = document.createElement("td");
    anyo.innerHTML = coche.anioFabricacion;
    fila.appendChild(anyo);
    table.appendChild(fila);
  });

  // Agrega la tabla a la página web
  document.body.appendChild(table);
});
