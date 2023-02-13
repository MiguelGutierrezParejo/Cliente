<?php
/*
$fichero = "resultado.txt";
$contenido = file($fichero);

$array = explode("||", $contenido[0]);
$real = $array[0];
$barcelona = $array[1];
$atleti = $array[2];
$sevilla = $array[3];


$voto = $_GET['voto'];

if ($voto == 0) {
    $real = $real + 1;
}
if ($voto == 1) {
    $barcelona = $barcelona + 1;
}
if ($voto == 2) {
    $atleti = $atleti + 1;
}
if ($voto == 3) {
    $sevilla = $sevilla + 1;
}

$insertvoto = $real."||".$barcelona."||".$atleti."||".$sevilla;

$fp = fopen($fichero,"w");
fputs($fp, $insertvoto);
fclose($fp);

$denominador = (int)$real + (int)$barcelona + (int)$atleti + (int)$sevilla;
$tantoMadrid = 100 * round($real/$denominador, 2);
$tantoBarcelona = 100 * round($barcelona/$denominador, 2);
$tantoAtleti = 100 * round($atleti/$denominador, 2);
$tantoSevilla = 100 * round($sevilla/$denominador, 2);
*/

$fichero = "resultado.txt";
$valores = explode("||", file_get_contents($fichero));

$voto = $_GET['voto'] ?? null;
if ($voto !== null && isset($valores[$voto])) {
    $valores[$voto]++;
}

$insertvoto = implode("||", $valores);
file_put_contents($fichero, $insertvoto);

$denominador = array_sum($valores);
$tanto = [];
foreach ($valores as $valor) {
    $tanto[] = 100 * round($valor/$denominador, 2);
}
list($tantoMadrid, $tantoBarcelona, $tantoAtleti, $tantoSevilla) = $tanto;
?>

<table>
    <tr>
        <th>Equipo</th>
        <th>Porcentaje</th>
    </tr>
    <tr>
        <td>Real Madrid</td>
        <td><?= $tantoMadrid ?>%</td>
    </tr>
    <tr>
        <td>Barcelona</td>
        <td><?= $tantoBarcelona ?>%</td>
    </tr>
    <tr>
        <td>Atlético de Madrid</td>
        <td><?= $tantoAtleti ?>%</td>
    </tr>
    <tr>
        <td>Sevilla</td>
        <td><?= $tantoSevilla ?>%</td>
    </tr>
</table>
