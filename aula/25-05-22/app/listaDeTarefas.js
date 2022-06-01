const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos() {

    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa);
    FORMULARIO.addEventListener('submit', adicionaTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);
}

function pegaTarefa(){ //pega da API agr
    
    let tarefas;

    fetch('http://localhost:8080/app/api/v1/tarefa.php').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        tarefas = JSON.parse(conteudo);
        tarefas.forEach(function(tarefa){

            //cria os novos elementos
            const LI = document.createElement('li');
            LI.className = 'collection-item';
            LI.appendChild(document.createTextNode(tarefa.descricao));
            const A = document.createElement('a');
            A.className = 'apaga-tarefa secondary-content';
            const I = document.createElement('i');
            I.className = 'fa fa-remove';
            A.appendChild(I);
            LI.appendChild(A);
            LISTA.appendChild(LI);
            //FIM cria os novos elementos
        });

    });
}

function filtraTarefa(evento){

    const texto = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        
        const item = tarefa.firstChild.textContent;

        //-1 significa que não há o que está sendo buscado
        if(item.toLowerCase().indexOf(texto) != -1){
            tarefa.style.display = 'block';
        }else{
            tarefa.style.display = 'none';
        }
    });
}

function apagaTodasTarefas(evento){

    evento.preventDefault();

    LISTA.innerHTML = '';

    apagaTodasDoLocalStorage();
}

function apagaTarefa(evento){

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }

    apagaDoLocalStorage(evento.target.parentElement.parentElement);
}

function apagaDoLocalStorage(tarefaParaApagar){

    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function(tarefa, indice){

        if(tarefaParaApagar.textContent === tarefa){
            tarefas.splice(indice, 1);
        }
    });

    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}

function adicionaTarefa(evento){

    evento.preventDefault();
    if(CAMPO_TAREFA.value === '') {//verifica se o campo está vazio

        alert('Insira uma tarefa');

    }else{

        //cria os novos elementos
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        LI.appendChild(A);
        //FIM cria os novos elementos

        LISTA.appendChild(LI);//Adiciona à lista de tarefas
        
        //gravaTarefaNoLocalStorage(CAMPO_TAREFA);
        gravaNoBack(CAMPO_TAREFA);
        CAMPO_TAREFA.value = '';
    }
}

function gravaNoBack(tarefa) { //se coloca algo novo já grava no back //fazer apagar*
    console.log(tarefa.value)
    let myInit = {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({descricao: tarefa.value, imagem: ''})
        }

    fetch('http://localhost:8080/app/api/v1/tarefa.php', myInit).then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
       console.log(conteudo);
    });
}

function gravaTarefaNoLocalStorage(tarefa){
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

carregaMonitorDeEventos();