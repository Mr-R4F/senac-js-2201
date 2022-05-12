document.querySelector('button').addEventListener('click', mostraCotacao);

function mostraCotacao()
{
    try 
    {
        fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado) //chama a url, se der certo, chama o then e executa a função de callback
        {
            return resultado.text(); //se isso der certo, chama o then (pega o conteudo p/ ser trabalhado)
        }).then(function(cotacoes) {
    
            const moedas = JSON.parse(cotacoes);
            const ul = document.querySelector('ul');
            const nomes = moedas.moedas;
            const valores  = moedas.valores;
        
            document.querySelector('ul').innerHTML = '';
        
            for (let i = 0; i < nomes.length; i++)
            {
                const li = document.createElement('li');
        
                li.appendChild(document.createTextNode(nomes[i] , ':', valores[i]));
                ul.appendChild(li);
            }
        });
    } catch(e) {
        alert('Problema ao obter os dados:' , e.message);
    }
}