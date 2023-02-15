<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACTIVIDAD 3 - ENCUESTA INTERACTIVA AJAX - PHP</title>
    <link rel="stylesheet" href="style.css">
    <script>
        function getvoto(int) {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('encuesta').innerHTML = this.responseText;
                }
            }
            xmlhttp.open("GET", "encuesta_voto.php?voto=" + int, true);
            xmlhttp.send();
        }
    </script>
</head>

<body>

        <h3>¿Qué equipo crees que va a ganar la liga este año?</h3>

        <form>
            Real Madrid:
            <input type="radio" name="voto" value="0" onclick="getvoto(this.value)"></br>
            Barcelona:
            <input type="radio" name="voto" value="1" onclick="getvoto(this.value)"></br>
            Atleti:
            <input type="radio" name="voto" value="2" onclick="getvoto(this.value)"></br>
            Sevilla:
            <input type="radio" name="voto" value="3" onclick="getvoto(this.value)"></br></br>
        </form>



    <h2>RESULTADO:</h2>



    <div id="encuesta">
    <?php
            require "encuesta_voto.php";
        ?>
    </div>
</body>

</html>
