<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    //Sirve para si el campo de nombre esta vacio que salga un error
    if (empty($nombre)) {
        echo "Por favor completa el campo Nombre.";
        exit;
    }

    // Lo mismo que el nombre pero con el correo
    if (empty($correo)) {
        echo "Por favor completa el campo Correo electrónico.";
        exit;
    }

    //Lo mismo que nombre y correo pero con el mensaje 
    if (empty($mensaje)) {
        echo "Por favor completa el campo Mensaje.";
        exit;
    }

    // Valida el correo si es un tipo de correo valido
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo "Correo electrónico inválido";
        exit;
    }
    //Si funciona el formulario al enviarlo pues vuelve al formulario y te sale un mensaje de que esta bien 
    header("Location: formulario.html?enviado=true");
    exit;
} else {
    //Si alguien intenta acceder a este archivo directamente, redirigir de vuelta al formulario
    header("Location: formulario.html");
    exit;
}
?>