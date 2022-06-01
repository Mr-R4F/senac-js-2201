<?php
require_once 'conexao.php';

//Evita SQL Injection
$id = preg_replace('/\D/', '', $_POST['id']);//Elimina tudo que não é número

if($bd->exec("UPDATE tarefas SET apagado = 1 WHERE id = $id")){

    echo "Tarefa apagada com sucesso! ";

}else{

    echo "Erro ao tentar apagar a tarefa!";
}

echo "<br><br><a href='listarTarefa.php'>Voltar</a>";