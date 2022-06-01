<?php
//Conecta no Banco de Dados
$dsn = 'mysql:dbname=app;host=localhost';
$user = 'root';
$pass = '';

$bd = new PDO($dsn, $user, $pass);
//FIM Conecta no Banco de Dados