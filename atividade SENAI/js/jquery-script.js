$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
        $("#form-cadastrar").fadeToggle('slow');
        $("#section-login").slideToggle(0);
        $("#botao-cadastrar").hide();
        $("footer").hide();
    });

    $("#bt-retornar").click(function(){
        $("#form-cadastrar").hide();
        $("#h1-login").show();
        $("#section-login").slideToggle(1000);
        $("#botao-cadastrar").slideToggle(1000);
        $("footer").fadeToggle(2000);
    });


    $("#dropdown").mouseenter(function(){
        $("#dropdown").css("color","black");
    });

    $("#dropdown").mouseleave(function(){
        $("#dropdown").css("color","white");
    });

    $("#voltar-topo").mouseenter(function(){
        $("#voltar-topo").css("background-color","rgb(0,0,255,0.9)");
    });

    $("#voltar-topo").mouseleave(function(){
        $("#voltar-topo").css("background-color","rgb(0,0,255,0.3)");
    });

    $("#game-1").click(function(){
        $("#painel-1").slideToggle("slow");
    });

    $("#game-2").click(function(){
        $("#painel-2").slideToggle("slow");
    });

    $("#game-3").click(function(){
        $("#painel-3").slideToggle("slow");
    });

});
