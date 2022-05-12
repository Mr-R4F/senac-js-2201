//Lidando c/ erros
//try..catch trata algum erro.
//É possível ver qual o tipo de erro.

/*
try {
    executaMInhaFuncao(); //tente fazer
} catch (erro) { //se não der pegue o erro e faça algo c/ esse erro
   //console.log(error.name); //'name' - Diz o nome do erro.
   //console.log(error.message); //'name' - Diz o nome do erro.
   //alert(error instanceof ReferenceError); //se for um erro de instancia de referência...
   console.log(erro.message);
}
finally {
    console.log('Executou!');
} //é executado de qualquer forma. (independente do erro).
*/

//jogar os próprios erros.

try {
    let a = "b";
    if (typeof a == 'boolean'); //ou !=  //se o tipo de erro for diferente de boleano... lançar um erro.
        throw new SyntaxError('A tem que ser true/ false'); // new - instanciar classe (transforma a classe num obj) lançando uma classe de erro p/ quem pegar o catch.
} catch (erro) {
    console.log(erro.message);
}
finally {
    console.log('Se der erro ou não, esse código é executado!');
}

//é possível lançar os próprios erros