//criando elementos

//criado o li
const li = document.createElement('li'); //cria elemento
li.className = 'collection-item'; //define classe
li.id = 'nova-tarefa-qualquer'; //define id
li.setAttribute('title', 'pare o mouse p/ ver'); //define atributo
//fim  da criação do elemento li

//criou texto p/ colocar em li
const texto = document.createTextNode('Tarefa inserida dinamicamente'); //insere o dado dentro do elemento

li.appendChild(texto); // append - add/ inserir dentro do elemento - colocou o texto em li.


//inseriu o x, .

//criado o elemento a
const a = document.createElement('a');
a.className = 'delete-item secondary-content';
a.setAttribute('href', '#');

//criado o elemento i
const i = document.createElement('i');
i.className = 'fa fa-remove';
//fim do elemento a
a.appendChild(i); //colocamos o i no a;
li.appendChild(a); //colocamos o 'a' no 'li'.
console.log(i);

//capturamos o elemento ul p/ poder inserir o li
const ul = document.querySelector('ul.collection');
ul.appendChild(li); //colocamos o li no ul.

//atualizando elementos.

const novoTitulo = document.createElement('h2'); //cria elemento
novoTitulo.id = 'task-tile'; //define id

const novoTexto = document.createTextNode('Listinha'); //cria texto
novoTitulo.appendChild(novoTexto); //insere texto

const antigoTitulo = document.querySelector('h5');
const elementoPai = document.querySelector('div.card-action');
elementoPai.replaceChild(novoTitulo, antigoTitulo);


/*
novoTitulo.appendChild(document.createTextNode('Listinha'));
const tituloAntigo = document.getElementById('task-title');
*/
