document.querySelector('input').focus();

class Opcoes { //Cria a classe opções
    constructor() { //É chamado quando a classe 'Opcoes' é instânciada
        const num = document.getElementById('num').value;

        if (num == '' || num == 'e') {
            alert('Preencha o campo');
        } else {
            try {
                const select = document.getElementById('numeros').value;
                this.numeros(select);
            } catch (e) {
                alert('Escolha uma opção');
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
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;

            case 'ano':
                fetch(`http://numbersapi.com/${num}/year`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;

            case 'data':
                fetch(`http://numbersapi.com/${num}/date`).then(function(resultado) {
                        return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;

            case 'matematica':
                fetch(`http://numbersapi.com/${num}/math`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
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