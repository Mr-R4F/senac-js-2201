document.querySelector('button').addEventListener('click', mostraCotacao);

function mostraCotacao(){

    try{

        fetch('http://127.0.0.1:5500/AJAX/cotacoes.html').then(function(resultado){
            return resultado.text();
        }).then(function(cotacoes){
            
            const moedas = JSON.parse(cotacoes);

            document.querySelector('ul').innerHTML = '';

            const ul = document.querySelector('ul');

            const nomes = moedas.moedas;
            const valores = moedas.valores;

            for(let i = 0; i < nomes.length; i++){

                let li = document.createElement('li');
                let text = document.createTextNode(nomes[i] + ': ' + valores[i]);
                li.appendChild(text);
                ul.appendChild(li);
            }
        });

    }catch(e){

        alert('Problema ao obter os dados: ' + e.message);
    }
}