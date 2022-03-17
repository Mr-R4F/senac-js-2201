//Tamanho da tela

const tam = window.innerHeight + 'x' + window.innerWidth;
const p = document.querySelector('p');
const nav = window.navigator;

console.log(nav)

p.innerText = nav;
