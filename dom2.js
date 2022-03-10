const p = document.getElementById("p1");
p.innerText = "Meu texto!"; 


if (confirm('Quer entrar com algum valor?')) //dar uma chance do usuario digite um número. (click ok ?)
{
    let valor = parseInt(prompt("nº de 0 a 10"));

    if (valor >= 0 && valor <= 10)
    {
        p.innerHTML = ' ';

        for (let i = 0; i < valor; i++)
        {
            // p.innerText = "Funciona"; // Aqui a variável sempre é tem o mesmo valor.  e não funcionaria, pois atribui sempre o mesmo valor n vezes.
            p.innerText = p.innerText + "Funciona!!!\n"; //esse funciona, pois 'acumula' strings.
        }
    }
    
    else
    {
        p.innerText = 'Valor ínvalido';
    }
}

else
{
    p.innerText = "Que pena que você não entrou com um valor :-(";  // (click cancelar).
}