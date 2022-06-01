<?php
require 'controleDeAcesso.php';
require 'conexao.php';

$tarefa = $_POST['tarefa'];//Dado inseguro 

$arquivoEnviado = '';

if($_FILES['figura']['error'] == 0 &&
    $_FILES['figura']['size'] > 0){

    $mimeType = mime_content_type($_FILES['figura']['tmp_name']);

    $campos = explode('/', $mimeType);
    $tipo = $campos[0];
    $ext = $campos[1];

    if($tipo == 'image'){

        $arquivoEnviado = 'imagens/' . $_FILES['figura']['name'] 
                . '_' . md5(rand(-9999999, 9999999) . microtime()) 
                    . '.' . $ext;

        move_uploaded_file($_FILES['figura']['tmp_name'], "$arquivoEnviado");
    }else{
        echo "Arquivo ignorado por não se tratar de um arquivo de imagem<br>";
    }
}

$stmt = $bd->prepare('INSERT INTO tarefas (descricao, imagem) VALUES (:tarefa, :imagem)');

$stmt->bindParam(':tarefa', $tarefa);
$stmt->bindParam(':imagem', $arquivoEnviado);

if( $stmt->execute() ){

    echo "$tarefa gravada com sucesso!";
}else{
    echo "Problema ao gravar $tarefa";
}

echo "<br><a href='formTarefa.php'>Voltar</a>";