//Event listener (delegation)
/*
document.body.addEventListener('click', function(evt)
{
    console.log(evt.target); //alvo (onde é clicado)
});
*/

/*
//Executar alguma parte.

document.body.addEventListener('click', function(evt)
{
    evt.preventDefault();

    if (evt.target.parentElement.classList.contains('delete-item') === true) //se for um boleano ...
        console.log('Apagou');

}); //pega o elemento pai e a lista de classes para ver se tem o elemento pai
*/

//Usar delegação p/ remover itens

document.body.addEventListener('click', function(evt)
{

    evt.preventDefault();

    if(e.target.parentElement.classList.contains('delete-item') === true)
        e.target.parentElement.parentElement.remove();  //remove o pai do pai (i > [a > li]).   
});

