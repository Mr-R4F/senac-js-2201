document.querySelector('input').focus();

class Opcoes { //Cria a classe opções
    constructor() { //É chamado quando a classe 'Opcoes' é instânciada
        const num = document.getElementById('num').value;

        if (num == '' || num == 'e') {
            document.getElementById('aviso').removeAttribute('hidden');
            document.getElementById('aviso').innerText = 'Preencha o campo';
            document.querySelector('input').focus();
        } else {
            try {
                const select = document.getElementById('numeros').value;
                this.numeros(select);
            } catch (e) {
                document.getElementById('aviso').removeAttribute('hidden');
                document.getElementById('aviso').innerText = 'Escolha uma opção';
                document.querySelector('input').focus();
            }
        }
    }

    numeros(select) {
        const num = document.getElementById('num').value;

        switch (select) {
            case 'trivia':
                fetch(`http://numbersapi.com/${num}/trivia`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('aviso').setAttribute('hidden', 'on');
                    document.getElementById('resultado').innerText = conteudo;
                    document.querySelector('input').focus();
                });
                break;

            case 'ano':
                fetch(`http://numbersapi.com/${num}/year`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('aviso').setAttribute('hidden', 'on');
                    document.getElementById('resultado').innerText = conteudo;
                    document.querySelector('input').focus();
                });
                break;

            case 'data':
                fetch(`http://numbersapi.com/${num}/date`).then(function(resultado) {
                        return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('aviso').setAttribute('hidden', 'on');
                    document.getElementById('resultado').innerText = conteudo;
                    document.querySelector('input').focus();
                });
                break;

            case 'matematica':
                fetch(`http://numbersapi.com/${num}/math`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('aviso').setAttribute('hidden', 'on');
                    document.getElementById('resultado').innerText = conteudo;
                    document.querySelector('input').focus();
                });
                break;

            default:
                throw SyntaxError ('Operação indisponível');
        }
    }
}

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    new Opcoes; //Classe sendo instânciada
});