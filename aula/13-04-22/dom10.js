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

// Ao clicar no evento mas interno, todos os outros são disparados.
//Quando clico no elemento mais interno em uma cadeia de elementos com 
//Event Listener, todos eventos dos elementos mais externos são acionados
document.querySelector('.card-title').addEventListener('click', function(e){

    console.log('Título');
});

document.querySelector('.card-content').addEventListener('click', function(e){

    console.log('Form');
});

document.querySelector('.card').addEventListener('click', function(e){

    console.log('Tudo');
});