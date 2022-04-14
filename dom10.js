//Event listeners (event bubbling)

/*
document.querySelector('.card-title').addEventListener('click', function(evt)
{
    console.log(evt.target); //alvo (onde é clicado)
});

document.querySelector('.card-content').addEventListener('click', function(evt)
{
    console.log(evt.target);
});

document.querySelector('.card').addEventListener('click', function(evt)
{
    console.log(evt.target);
});

//dispara os 3, pois um está 'dentro' do outro.
*/

document.querySelector('.card-title').addEventListener('click', function(evt)
{
    console.log('Titulo'); //alvo (onde é clicado)
});

document.querySelector('.card-content').addEventListener('click', function(evt)
{
    console.log('Form');
});

document.querySelector('.card').addEventListener('click', function(evt)
{
    console.log('Tudo');
});

// Ao clicar no evento mas interno, todos os outros são disparados.