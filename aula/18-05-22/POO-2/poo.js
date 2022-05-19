class Calculadora { // cria sempre uma classe p/ determinada responsabilidade // a classe vai possuir atributos e metodos onde 1 é o construtor que é executado assim que a classes é instânciada pelo (new)
    constructor () { //é chamado ao instanciar;
        try {
            const operacao = document.getElementById('operacao').value;
            this.calcula(operacao); 
        } catch (e) {
            alert('Escolha uma operação'); 
        }
    }
    
    calcula(operacao) {
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value; //pega valores
        let resultado;

        switch (operacao) {
            case 'soma':
                resultado = this.soma(n1, n2);
                break;

            case 'subtracao':
                resultado = this.subtracao(n1, n2);
                break;
        
            default:
                throw SyntaxError('Operação indisponivel');
        }
        this.exibeResultado(resultado); //exibe o r
    }

    soma (nm1, nm2) {

        let n1 = Number(nm1);
        let n2 = Number(nm2);
        
        return n1 + n2;
    }

    subtracao (nm1, nm2) {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 - n2;
    }

    exibeResultado(res) {
        document.getElementById('resultado').innerText = res; //pega resul e coloca na div.
    }

    static metodoEstatico() {
        console.log()
    }
}

document.getElementById('calc').addEventListener('click', function(e) {
    e.preventDefault();
    const obj = new Calculadora;//instanciar a classe - definição a ser usada
})  

//usar novas funcionalidades sem modificar
// usa herança isto é herda uma classe de uma código (incluindo atributos e metodos)
//polimorfismo.* //altera o comportamento da classe pai. (rescreve algum metodo) (usa uma classe, n altera, mas adiciona coisas novas)

class CalculadoraAvancada extends Calculadora { //herda tudo de calculadora, isto é tem tudo de calculadora e mais coisas a serem add
    constructor() { //no php só seria executado se isso fosse explicito
       super(); //executa o construtor dar classe herdada. (calculadora nesse caso). //em outras linguagens é necessário puxar // super é construtor da super classe
    }
   
    calcula(operacao) {
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value; //pega valores
        let resultado;

        switch (operacao) {
            case 'soma':
                resultado = this.soma(n1, n2);
                break;

            case 'subtracao':
                resultado = this.subtracao(n1, n2);
                break;

            case 'multiplicacao':
                resultado = this.multiplicacao(n1, n2);
                break;

            case 'divisao':
                resultado = this.divisao(n1, n2);
                break;
        
            default:
                throw SyntaxError('Operação indisponivel');
        }
        this.exibeResultado(resultado); //exibe o r
    }
   
    multiplicacao (nm1, nm2) {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 * n2;
    }

    divisao (nm1, nm2) {
        let n1 = Number(nm1);
        let n2 = Number(nm2);

        return n1 / n2;
    }
}

document.getElementById('calc').addEventListener('click', function(e) {
    e.preventDefault();
    Calculadora.metodoEstatico();
    const obj = new CalculadoraAvancada;//instanciar a classe - definição a ser usada
})  

//estatico pode ser executado sem instanciar a classe.
//padrão de projetos forumula p/ resolver problemas conhecidos na programação 