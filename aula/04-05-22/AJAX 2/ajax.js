document.querySelector('button').addEventListener('click', mostraCotacao);

function mostraCotacao()
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

        //ou
        /*
        obj.moedas.forEach(function(val) {
            const li = document.createElement('li');
            const ul = document.querySelector('ul');

            li.appendChild(document.createTextNode(val));
            ul.appendChild(li);
        });

        obj.valores.forEach(function(val) {
            const li = document.createElement('li');
            const ul = document.querySelector('ul');

            li.appendChild(document.createTextNode(val));
            ul.appendChild(li);
        });
        */
    });
}

//usar o fetch é a forma + comum de se consumir ajax

//dá pra usar o fetch ou xhr

//faz requisição pra api json e retorna
//chamar a url, pegar json, recupera e mostrar na tela