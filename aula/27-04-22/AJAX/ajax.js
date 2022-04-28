document.getElementById('xhr').addEventListener('click', buscaDados);

function buscaDados(){
    const XHR = new XMLHttpRequest(); /** O operador new instancia uma classe **/

    XHR.open('GET', 'conteudo.txt', true); // true = assincrono, síncrono está sendo descontinuado

    XHR.onload = function(){
        if(this.status === 200) { // HTTP code 200 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
        }
    }

    XHR.send(); // Realiza a requisição.
}

//Exmp c/ fetch

document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo()
{
    fetch('http://10.135.236.14:5500/AJAX/conteudo.txt').then(function(resultado) //chama isso, executa
    {
        return resultado.text();
    }).then(function(conteudo)
    {
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}
//usar o fetch é a forma + comum de se consumir ajax