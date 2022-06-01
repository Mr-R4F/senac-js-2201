document.getElementById('peso').focus();

document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (peso == '' && altura == '' || peso == '' || altura == '') {
        document.getElementById('aviso').removeAttribute('hidden');
        document.getElementById('aviso').innerText = 'Preencha os campos';
    }
    else {
        if (peso == 0  && altura == 0 || peso == 0 || altura == 0) {
            document.getElementById('aviso').removeAttribute('hidden');
            document.getElementById('aviso').innerText = 'Digite um valor válido';
        }
        else {
            const imc = (peso / (altura ** 2));
            document.getElementById('aviso').setAttribute('hidden', 'on');

            switch (imc != 0) {
                case imc >= 40.00:
                    document.getElementById('resultado').innerText = imc.toFixed(2);
                    document.getElementById('classificacao').innerText = 'Obesidade Grave';
                    document.getElementById('grau-obesidade').innerText = 'III';
                    break;
            
                case imc <= 39.99 && imc >= 30.00:
                    document.getElementById('resultado').innerText = imc.toFixed(2);
                    document.getElementById('classificacao').innerText = 'Obesidade';
                    document.getElementById('grau-obesidade').innerText = 'II';
                    break;
                    
                case imc <= 29.99 && imc >= 25.00:
                    document.getElementById('resultado').innerText = imc.toFixed(2);
                    document.getElementById('classificacao').innerText = 'Sobrepeso';
                    document.getElementById('grau-obesidade').innerText = 'I';
                    break;
            
                case imc <= 24.99 && imc >= 18.50:
                    document.getElementById('resultado').innerText = imc.toFixed(2);
                    document.getElementById('classificacao').innerText = 'Normal';
                    document.getElementById('grau-obesidade').innerText = '0';
                    break;
                    
                case imc < 18.50:
                    document.getElementById('resultado').innerText = imc.toFixed(2);
                    document.getElementById('classificacao').innerText = 'Magreza';
                    document.getElementById('grau-obesidade').innerText = '0';
                    break;
            
                default:
                    break;
            }
        }
    }
});

document.getElementById('limpa').addEventListener('click', (e) => {
    e.preventDefault();
    mudarTexto();
    document.getElementById('peso').focus();
});

function mudarTexto () {
    document.getElementById('resultado').innerText = '';
    document.getElementById('classificacao').innerText = '';
    document.getElementById('grau-obesidade').innerText = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}