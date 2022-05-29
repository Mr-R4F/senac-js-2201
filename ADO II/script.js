document.getElementById('nome').focus();

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;

    if (nome === '') {
        document.getElementById('aviso').removeAttribute('hidden');
        document.getElementById('aviso').innerText = 'Preencha o campo';
        document.getElementById('nome').focus();
    } else {
        document.getElementById('aviso').setAttribute('hidden', 'on');

        fetch(`https://api.agify.io?name=${nome}`).then(function(resultado) {
        return resultado.json();
        }).then(function(conteudo) {
            document.getElementById('resultado').innerText = "Sua idade é: " + conteudo.age;
        });
    }
});