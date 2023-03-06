<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A2 MAGutierrez</title>
    <script>
        function getvoto(int) {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('encuesta').innerHTML = this.responseText;
                }
            }
            xmlhttp.open("GET", "encuesta.php?voto=" + int, true);
            xmlhttp.send();
        }
    </script>
</head>

<body>

        <h3>¿Qué alimento forma parte de tu dieta habitual?</h3>

        <form>
            Pescado
            <input type="radio" name="voto" value="0" onclick="getvoto(this.value)"></br>
            Carnes rojas
            <input type="radio" name="voto" value="1" onclick="getvoto(this.value)"></br>
            Pollo
            <input type="radio" name="voto" value="2" onclick="getvoto(this.value)"></br>
            Cerdo
            <input type="radio" name="voto" value="3" onclick="getvoto(this.value)"></br>
            Verduras
            <input type="radio" name="voto" value="4" onclick="getvoto(this.value)"></br>
            Frutas
            <input type="radio" name="voto" value="5" onclick="getvoto(this.value)"></br><br>
        </form>



    <h2>RESULTADO:</h2>



    <div id="encuesta">
    <?php
            require "encuesta.php";
        ?>
    </div>
</body>

</html>
