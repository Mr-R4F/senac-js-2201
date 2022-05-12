document.querySelector('input.btn').addEventListener('click', function(e)
{
    e.preventDefault();
    const valor = document.querySelector('input#task').value;

    try {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.id = 'nova-tarefa-qualquer';
        li.setAttribute('title', 'pare o mouse p/ ver'); 

        const texto = document.createTextNode(valor);
        li.appendChild(texto);

        const a = document.createElement('a');
        a.className = 'delete-item secondary-content';
        a.setAttribute('href', '#');

        const i = document.createElement('i');
        i.className = 'fa fa-remove';

        a.appendChild(i);
        li.appendChild(a);
        console.log(i);

        const ul = document.querySelector('ul.collection');
        ul.appendChild(li);
    }catch (erro) {
        alert('Não foi possível criar elementos');
    }
});