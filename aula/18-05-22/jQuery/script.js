//biblioteca, facilita o código
//document...ready evitar que o script seja carregado antes da pagina ser carregada

$(document).ready(function () {
    //console.log($(".h3").html()); //pega html() (html) - text();
    //console.log($(".h3").text()); //pega text();
    //console.log($("p").text('teste'));
    //console.log($("p").click('lgsdghtujy'));
    $("p").click(function () {
       $("p").css({"color" : "blue", "font-size" : "500px"});
    });

    $.ajax({
        type: "GET",
        url: "https://www.boredapi.com/api/activity",
        datatype: "json",
        success: function (result, status, xhr) {
            console.log(status);
            console.log(result);
            console.log(xhr);
            $("p").text(result.activity);
        },
        error: function (xhr, status, error) {
            alert("result: " , status , " " , error , " " , xhr.statusText);
        }
    })
})