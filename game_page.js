jogador1Nome = localStorage.getItem("nomeJogador1");
jogador2Nome = localStorage.getItem("nomeJogador2");

jogador1Score = 0;
jogador2Score = 0;

document.getElementById("nomeJogador1").innerHTML = jogador1Nome + " : ";
document.getElementById("nomeJogador2").innerHTML = jogador2Nome + " : ";

document.getElementById("joga1Score").innerHTML = jogador1Score ;
document.getElementById("joga2Score").innerHTML = jogador2Score ;

document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta - " + jogador1Nome ;
document.getElementById("jogadorResposta").innerHTML = "Turno de Resposta - " + jogador2Nome ;


function send()
{
    number1 = document.getElementById("number1p").value;
    number2 = document.getElementById("number2p").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4> " + number1 + " X " + number2 + "</h4>";
    input_box = "<span><h4 id='lgResposta'>Resposta : </h4> <input type='text' id='input_check_box'> </span> <br> <br>";
    check_button = "<button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1parte1").value = "";
    document.getElementById("number2parte1").value = "";
}
