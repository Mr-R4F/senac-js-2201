//Seletores - elem. únicos.

/*
console.log(document.querySelector('li:first-child').innerText);
console.log(document.querySelector('li:last-child').innerText);
console.log(document.querySelector('li:nth-child(2)').innerText);
console.log(document.querySelector('li:nth-child(3)').innerText);
*/

/*

//Seletores Multiplos. - elem. multiplos.

console.log(document.getElementsByClassName('collection-item')); //Aparece todos os elementos que possuem esta classe

//de acordo com o índice muda a cor
const itens = document.getElementsByClassName('collection-item');
itens[0].style.color = "red";
*/

//OU pela classe

/*
const itens = document.querySelector('ul').getElementsByClassName('collection-item'); //pega o elemento, depois o elemento que possui tal classe
itens[0].style.color = "green";
*/

//OU pela tag

/*
const itens = document.getElementsByTagName('li'); //pega tudo a tag
itens[0].style.color = "green";
itens[3].style.color = "green";
itens[1].style.color = itens[2].style.color = "yellow";
*/

/*
//Trabalhar c/ loop
const itens = document.getElementsByTagName('li');
console.log(itens)

let itensArray = Array.from(itens);
*/

/*
itensArray.forEach(function(li, indice)
{
    console.log(`${indice}: ${li.innerText}`)
});
*/


/*
for (let i = 0; i < itensArray.length; i++)
{
    if (i % 2 == 0)
        itensArray[i].style.background = "red"
    else
        itensArray[i].style.background = "yellow"
}
*/

/* Como mudar as cores das linhas
let itensImpares = document.querySelectorAll('li:nth-child(odd)');
console.log(itensImpares)

let mudaCor = Array.from(itensImpares)

mudaCor.forEach(function(item)
{
    item.style.background = '#dedede'
});
*/
/*
const itens = document.querySelector('ul.collection');
//let valor = itens.children[2].children[0].children[0]; //pega filho do filho ... mas o indice muda.
//let valor = itens.children[2].firstChild.textContent = 'Estudar ainda mais'; //mudar o texto do filho. - modifica o textContent
//let valor = itens.children[2].firstChild.data = 'Vamos ver agora'; //outra forma.
let valor = itens.children[2].firstChild.nodeValue = 'Mudou denovo'; //outra forma de mudar
*/

/*
const itens = document.querySelector('form');
let valor = itens.children[0].children[1].textContent = 'Mudou denovo';
console.log(valor);
*/

//ou
/*
const itens = document.querySelector('form div label'); //forma direta
console.log(itens.textContent);
itens.textContent = 'Mudou!';
*/

const itens = document.querySelector('a.clear-tasks'); //forma direta
console.log(itens.textContent);
itens.textContent = 'Mudou!';

