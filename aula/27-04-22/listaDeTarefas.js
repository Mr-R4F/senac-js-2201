//pendurar eventos

//vars para trabalhar com a interface

const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

//Carregador de monitores de eventos
function carregaMonitorDeEventos() 
{
    document.addEventListener('DOMContentLoaded', pegaTarefa); //quando carregar o conteudo do DOM, a função pegaTarefas vai ser executada, isto é, pega os itens do Local Storage e mostra.
    FORMULARIO.addEventListener('submit', adicionaTarefa); //ao submeter, a função é chamada
    LISTA.addEventListener('click', apagarTarefa);
    BTN_LIMPAR.addEventListener('click', apagarTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);
}

//ao dar um reload na pagina...
function pegaTarefa ()
{
    let tarefas;

    //recupega do local se tiver algo
    if (localStorage.getItem('tarefas') === null)
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    tarefas.forEach(function(tarefa) //pega do vetor, cria e mostra. p/cada tarefa ele recupera um fragmento
    {
        //cria elementos
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(tarefa));

        const a = document.createElement('a');
        a.className = 'apaga-tarefa secondary-content';
        
        const i = document.createElement('i');
        i.className = 'fa fa-remove';

        a.appendChild(i);
        li.appendChild(a);

        LISTA.appendChild(li);
        //
    });
}

//filtro
function filtraTarefa(evt) 
{
    evt.preventDefault();

    const txt = evt.target.value.toLowerCase(); //converte o evento alvo para minusculo

    document.querySelectorAll('.collection-item').forEach(function(tarefa)
    {
        const item = tarefa.firstChild.textContent;

        /* se o indice tiver -1, nada foi colocado para busca - 
        indexOf - procura uma string numa posição X (lê toda a string para procurar), se encontrou mostra
        senão não faz nada */
        if (item.toLowerCase().indexOf(txt) != -1) //quando não é achado volta -1.
            tarefa.style.display = "block";
        else
            tarefa.style.display = "none";

    });
}

function apagarTodasTarefas(evt) 
{
    evt.preventDefault();

    LISTA.innerHTML = '';

    apagarTodasDoLocalStorage();
}

function apagarTodasDoLocalStorage()
{
    localStorage.removeItem('tarefas');
}

function apagarTarefa (evt) //apaga 1 tarefa
{
    evt.preventDefault();

    if(evt.target.parentElement.classList.contains('apaga-tarefa') === true)
        evt.target.parentElement.parentElement.remove();  //*remove o pai do pai da onde foi clicado (i > [a > li]). 
        
    apagaDoLocalStorage(evt.target.parentElement.parentElement);//* - e por uma ação para indicar qual deve ser apagado
}

function apagaDoLocalStorage(tarefaParaApagar)
{
    let tarefas;

    if (localStorage.getItem('tarefas') === null)
        tarefas = []; //se for vazio
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas')); //senão transforma num vetor

    tarefas.forEach(function(tarefa, i) //procura tarefa
    {
        if (tarefaParaApagar.textContent === tarefa) //se tiver apaga
            tarefas.splice(i, 1); //(passa o indice, e quanto quer apagar)
    });

    //devolver o novo vetor para o Local Storage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
//adiciona
function adicionaTarefa(evt)
{   
    evt.preventDefault();

    if (CAMPO_TAREFA.value === '') //verifica se o campo está vazio
    {
        alert('Insira uma tarefa');
    }

    else 
    {
        //cria elementos
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(CAMPO_TAREFA.value));

        const a = document.createElement('a');
        a.className = 'apaga-tarefa secondary-content';
        
        const i = document.createElement('i');
        i.className = 'fa fa-remove';

        a.appendChild(i);
        li.appendChild(a);
        //

        LISTA.appendChild(li);
        gravaTarefaNoLocalStorage(CAMPO_TAREFA) //fixa os dados ao dar um reload na page
        CAMPO_TAREFA.value = '';
    }
}

// grava no local
function gravaTarefaNoLocalStorage(tarefa)
{
    let tarefas;
    
    if (localStorage.getItem('tarefas') === null) //verifica se existe algo ('tarefas') no local, se for nulo, tarefas recebe um vetor vazio. 
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas')); //senão os itens são recuperados e transforma em string. (json)

    tarefas.push(tarefa.value); //junta em tudo recuperado do localStorage, vai colocando um na frente do outro.

    //transforma em texto puro.
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //Grava no localStorage (*transforma para string)
}

carregaMonitorDeEventos();

//bom custume separar em funções (para linguagens procedurais) - ideal colocar em funções
//na orientada está tudo dentro de uma classe.