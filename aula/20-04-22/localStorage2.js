
//De objeto JSON para string
const OBJ = {nome: "Bono", idade: 37};

//console.log( JSON.stringify(OBJ) );

//De string para objeto JSON
const STR = '{"nome": "Bono", "idade": 37}';

//console.log( JSON.parse(STR) );

localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

//console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

//console.log(IDADE);

//Recupera o valor do input preenchido pelo usuario e adiciona no Storage.
document.querySelector('input.btn').addEventListener('click', function(evt)
{
    evt.preventDefault();

    const TAREFA = document.querySelector('#task').value;

    //Ver se tem algo armazenado no localStorage.

    let tarefas;
    
    if (localStorage.getItem('tarefas') === null) //verifica se existe algo no local, se for nulo, tarefas recebe um vetor vazio. 
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas')); //senão os itens são recuperados e transforma em string. (json)

    tarefas.push(TAREFA); //junta em tudo recuperado do localStorage, vai colocando um na frente do outro.

    //transforma em texto puro.
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //Grava no localStorage (*transforma para string)
    document.getElementById('task').value = '';
    console.log(tarefas);
});

//Para sessionStorage é só trocar todos os localStorage(s) para sessionStorage.