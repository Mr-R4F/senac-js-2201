
//cria gráficos de linhas

new Morris.Line({
    element: 'grafico1', //nome do grafico
   
    data: [ //dados do gráfico
        { year: '2018', value: 642 },
        { year: '2019', value: 854 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],

    //x anos, y valores.
    xkey: 'year', 

    ykeys: ['value'],
    
labels: ['Value']
});
/*
//Gráfico de barra
new Morris.Bar({
    element: 'grafico2',
   
    data: [ 
        { year: '2018', value: 642 },
        { year: '2019', value: 854 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],

    xkey: 'year', 

    ykeys: ['value'],
    
labels: ['Value']
});

//Grafico de piz
new Morris.Donut({
    element: 'grafico3',
   
    data: [ 
        { yr: '2018', value: 642 },
        { year: '2019', value: 854 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],

    xkey: 'year', 

    ykeys: ['value'],
    
labels: ['Value']
});

//Gráfico de área
new Morris.Area({
    element: 'grafico4',
   
    data: [ 
        { year: '2018', value: 642 },
        { year: '2019', value: 854 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],

    xkey: 'year', 

    ykeys: ['value'],
    
labels: ['Value']
});
*/
