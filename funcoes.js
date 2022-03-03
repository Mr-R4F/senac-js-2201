olaMundoNoLog('Fernado');
olaMundoNoLog('Bono');
olaMundoNoLog('Carol');
olaMundoNoLog('Alves');

function olaMundoNoLog (nome)                             //param. o que espera receber
{
    console.log(`Olá ${nome}!`); //objeto . (atributo ou metodo do obj(variável ou função))
}

const SOMA = function (a , b) 
{
    return a + b;
};

let resultado = SOMA (2 , 2);
console.log(resultado);

(function(a, b){
    console.log(a + b);
})(3,3);

let vtr = [20, 21, 22, 23, 24, 25];

function pegarUltima(array)
{
    let ult = array.length - 1; //atributo do obj.
    return array[ult];
}
console.log("último elemento = " + pegarUltima(vtr));

let aluno = 
{
    nome: "Amanda",
    matricula: 827302,
    setNome: function (n){ //metodo setNome do objeto aluno
        console.log("Mudar p/ "  + n);
    }
};

aluno.setNome('Blabla');

//escopo p/ var teria problemas com escopos de bloco. já com let não.

//let hoje = new Date; new - transforme tal classe num objeto dela. - Como se fosse uma planta que pode ser usada para construir algo (transforma a 'planta' na 'casa') a partir da é possivel usar o objeto construido.
//console.log(hoje.getMonth()); //instancia.

function nomeMesCorrente() 
{
    const MES = 
    [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ];
    let objDate = new Date;
    let atual = objDate.getMonth(); //pegou a data da variável 'objDate' e jogou na váriavel

    return MES[atual]; //No array 'mes', ele pega o valor atual da váriavel 'atual' e mostra na tela.
}

console.log(nomeMesCorrente());

let hoje = new Date;

console.log(hoje.getHours() + ":" + hoje.getMinutes());

/*DOM - document object model
manipulador de objetos , pega os itens e transforma num objeto







/* const SOMA = function (a,b){ //depende do padrão projeto
    return a+ b;
}
let resultado = SOMA (2,3)
console.log(resultado)

IIFE
depende do padrão
{function(a,b){
    console.log(a+b)
}}(2,3);
*/