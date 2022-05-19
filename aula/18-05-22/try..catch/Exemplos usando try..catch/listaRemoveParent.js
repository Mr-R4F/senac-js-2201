document.body.addEventListener('click', function(evt)
{
    evt.preventDefault();

    try {
        if(evt.target.parentElement.classList.contains('delete-item') === true)
            evt.target.parentElement.parentElement.remove();  //remove o pai do pai (i > [a > li]).   
    } catch (error) {
        alert('Erro ao deletar');
    }
});