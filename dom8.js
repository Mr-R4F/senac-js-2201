//removendo elementos

const TODA_LISTA = document.querySelector('ul');
const LIS = document.querySelectorAll('li');

//TODA_LISTA.remove(); //Apaga tudo que está no UL

TODA_LISTA.removeChild(LIS[3]); //Apaga apenas um elemento li dentro de ul

LIS.forEach(function(val, i)
{
    TODA_LISTA.removeChild(LIS[i]); //p/ cada intereção pega o 'ul' e remove o 'child' e diz o indice na qual sofreu alteração;
});//pega cada elemento do vetor e executa

/* Atv.
const TODA_TITULO = document.getElementById('task-title');
console.log(TODA_TITULO)

TODA_TITULO.remove();
*/

const BOX = document.getElementsByClassName('input-field col s12');
//const BOX_VETOR = new Array

BOX[0].classList.add('collection-item');