<?php
require('controleDeAcesso.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
</head>
<body>
    <h5>CRUD Tarefas</h5>
    <div>
        <form action="gravaTarefa.php" 
                method="post"
                enctype="multipart/form-data">
            <label for="tarefa">Nova Tarefa</label>
            <input type="text" id="tarefa" name="tarefa">
            <br><br>
            <input type="file" name="figura">
            <br><br>
            <input type="submit" value="Gravar">
        </form>
    </div>
    <div>
        <a href="listarTarefa.php">Listar</a>
    </div>
</body>
</html>