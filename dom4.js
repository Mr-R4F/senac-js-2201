let saida;
saida = document;

saida = document.head;
saida = document.body;
saida = document.body.firstElementChild;
saida = document.body.firstElementChild.firstElementChild;
saida = document.body.firstElementChild.firstElementChild.firstElementChild;
saida = document.doctype;
saida = document.domain;
saida = document.URL;
saida = document.characterSet;
saida = document.forms;
saida = document.forms[0];
saida = document.forms[0][1];
saida = document.links; //coleção de links do html
saida = document.links[0];
saida = document.links[0].className;
saida = document.scripts;
saida = document.scripts[2];
saida = document.scripts[2].getAttribute('src'); //pegar atributo especifico

console.log(saida);