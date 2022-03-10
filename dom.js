/*
console.log(window); //window possui métodos para interagir com o documento
window.alert('Olá mundo'); //o window - fica implicta. //Todas as coisas/atributos/funções são encontradas dentro do window
*/

//metodo getElementById
//mudar algo, pegar o método de p.

const p = document.getElementById("p1");
p.innerHTML = "Meu texto!"; //Substitui o dado atual por esse. 

///mudar a cor com um loop

const cores = ["yellow", "red", "blue", "orange", "brown", "navy"];

for (let i = 0, c = 0; i < 10; i++, c++)
{
    p.style.background = cores[c]; // atributo background. 
    console.log (c + ': ' + p.style.background);

    if (c >= 6)
        c = -1;
}

console.log(p);