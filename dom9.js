//Eventos

//escutadores de eventos -> addEventListener -> para acontecer quando for detectado um evento
/*
document.querySelector('input.btn').addEventListener('click', function(evento) //espera receber o evento e função de callback (com o evento)
{
    evento.preventDefault(); //desabilitar/previna o comportamento padrão
    evento.color;
    console.log(evento.target.className); //elemento alvo
});

document.querySelector('span.card-title').addEventListener('mouseover', function(evento) //espera receber o evento e função de callback (com o evento)
{
    document.querySelector('#task-title').style.color = 'red';
});

document.querySelector('yt').addEventListener('click', function(evento)
{
    evento.preventDefault(); //previna o comportamento padrão.
    alert('você clicou em mim!');
    console.log()
});

document.querySelector('a.clear-tasks').addEventListener('click', function(e)
{
    e.preventDefault();
    const removerLI = document.querySelectorAll('li');
    const lista = document.querySelector('ul');

    removerLI.forEach(function(val, i)
    {
        lista.removeChild(removerLI[i]);
    });
});
//FIM DO LIMPA TAREFAS

const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostraEvento);

function mostraEvento(evento) 
{
    console.log(`Tipo de evento: ${evento.type}`); //pega o tipo do evento
    titulo.textContent = `Eixo: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;
    
    document.body.style.backgroundColor = `rgb(${evento.offsetX}, ${evento.offsetY}, ${Math.floor(Math.random() * 255)})`; // ou 40.
}
*/

// colocar o val do input no elemento

document.querySelector('input.btn').addEventListener('click', function(e)
{
    e.preventDefault();
    const valor = document.querySelector('input#task').value;

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.id = 'nova-tarefa-qualquer';
    li.setAttribute('title', 'pare o mouse p/ ver'); 

    const texto = document.createTextNode(valor);
    li.appendChild(texto);

    //
    const a = document.createElement('a');
    a.className = 'delete-item secondary-content';
    a.setAttribute('href', '#');

    //
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    a.appendChild(i);
    li.appendChild(a);
    console.log(i);

    //
    const ul = document.querySelector('ul.collection');
    ul.appendChild(li);
});