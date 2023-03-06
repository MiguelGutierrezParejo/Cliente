<?php
// Definir el nombre del fichero y la comida
$fichero = "resultados.txt";
$comida = array("Pescado", "Carnes", "Pollo", "Cerdo", "Verduras", "Frutas");

// Leer el contenido del fichero y convertirlo en un array de votos
$contenido = file($fichero);
$votos = explode("||", $contenido[0]);

// Actualizar el array de votos si hay un voto nuevo
if (isset($_GET['voto'])) {
    $voto = $_GET['voto'];
    // Asegurarse de que el voto es válido
    if ($voto >= 0 && $voto < count($comida)) {
        $votos[$voto] += 1;
        // Escribir el array de votos actualizado en el fichero
        $insertvoto = implode("||", $votos);
        file_put_contents($fichero, $insertvoto);
    }
}

// Calcular el total de votos y los porcentajes de cada comida
$total = array_sum($votos);
$porcentajes = array();
foreach ($votos as $voto) {
    if ($total != 0) {
        $porcentajes[] = number_format(100 * $voto / $total, 2);
    } else {
        $porcentajes[] = 0;
    }
}

// Mostrar una tabla con los resultados
echo "<table>";
for ($i = 0; $i < count($comida); $i++) {
    echo "<tr>";
    echo "<td>" . $comida[$i] . ":</td>";
    echo "<td><progress value='" . $porcentajes[$i] . "' ' max='100'>" . "</progress>" .  $porcentajes[$i] . "%</td>";
    echo "</tr>";
}
echo "</table>";
?>
