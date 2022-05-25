/*
class Usuario { //classe e definição dentro do bloco / definição do assunto, e tudo referente a classe é colocada dentro do bloco

    constructor () { //quando a classe é instânciada, é executado automaticamente
        this.nome = 'Bono'; //O this refere-se a algo dessa classe. 
    }

    listar() {
        //console.log('Lista usuario' , this.nome);
        this.mostrarMensagem();
    }

    editar() {
        console.log('Edita usuario');
    }

    cadastrar() {
        console.log('Cadastro feio');
    }

    mostrarMensagem(){
        alert('Mensagem p/ o usuário');
    }
}

let user = new Usuario; //pega as classes e joga na memoria, pega a classe e transforma no obj user...
//console.log(Usuario) //chama metodo do obj console
//metodo tem (), atributo não

user.listar();
*/

class Calculadora { // cria sempre uma classe p/ determinada responsabilidade // a classe vai possuir atributos e metodos onde 1 é o construtor que é executado assim que a classes é instânciada pelo (new)

    constructor()
    {
        this.calcula();
    }

    calcula()
    {
        const n1 = document.getElementById('num1').value; 
        const n2 = document.getElementById('num2').value; //pega valores


        const resultado = this.subtracao(n1, n2);

        this.exibeResultado(resultado); //pega resul e coloca na div.
    }

    soma(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 + n2;
    }

    subtracao(nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 - n2;
    }    

    exibeResultado(res)
    {
        document.getElementById('resultado').innerText = res;
    }
}

document.getElementById('calc').addEventListener('click', function(e){

    e.preventDefault();

    const obj = new Calculadora;
});