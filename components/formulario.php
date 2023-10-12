<?php
$Nombre = $_POST['Nombre'];
$Correo = $_POST['Correo'];
$Telefono = $_POST['Telefono'];
$Mensaje = $_POST['Mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$Mensaje = "Este mensaje fue enviado por " . $Nombre . ",\r\n";
$Mensaje .= "Su e-mail es: " . $Correo . " \r\n";
$Mensaje .= "Su Telefono es: " . $Telefono . " \r\n";
$Mensaje .= "Mensaje: " . $_POST['Mensaje'] . " \r\n";
$Mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'info@tienda.com';
$asunto = 'tienda.COM';

mail($para, $asunto, utf8_decode($Mensaje), $header);

header("Location:Formulario.js");
?>
