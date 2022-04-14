/*
// De objeto JSON para string

const OBJ = 
{
    nome: "Bono",
    idade: 37
};
console.log(JSON.stringify(OBJ));

// De string para objeto JSON

const STR = '{"nome": "bono", "idade": 37}'; 
console.log(JSON.parse(STR));

//só guarda string 
localStorage.setItem('nome', 'bono'); //só pode ser aberto em uma aba

const NOME = localStorage.getItem('nome'); //pega item da session
console.log(NOME);

sessionStorage.setItem('idade','37'); //pode ser aberto em várias abas
const IDADE = sessionStorage.getItem('idade','37'); //pega item da session

console.log(IDADE);
*/

// usuario digita e aparece no local
/*
document.querySelector('input.btn').addEventListener('click', function(evt)
{
    evt.preventDefault();
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

    
    localStorage.setItem('tarefa', valor);
    const TAREFAS = localStorage.getItem('', valor);
    document.querySelector('input#task').value = '';
    console.log(TAREFAS);
});
*/

document.querySelector('input.btn').addEventListener('click', function(e)
{
    e.preventDefault();

    const BTN = document.querySelector('input.btn')
    BTN.addEventListener('click', function(evento){
    evento.preventDefault()

    const TEXTO_USER = '{"tarefa": "' + document.querySelector('input#task').value + '"}'

    console.log(JSON.parse(TEXTO_USER));

    localStorage.setItem('tarefa', TEXTO_USER);
});

const TRF = localStorage.getItem('tarefa')

if(TRF)
    document.querySelector('#exibe').innerText = TRF
});

/*
const TRF = localStorage.getItem('tarefa');

if (TRF)
    document.querySelector('#exibe').innerText = TRF;
*/
//classes - 'saco' de var e funções. 
//classe - definição do obj
//obj - quando monta as especificações
//metodos.
//objeto - saco.
//
//atrb. var de uma class.