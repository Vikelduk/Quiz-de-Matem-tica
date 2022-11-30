jogador1Nome = localStorage.getItem("nomeJogador1");
jogador2Nome = localStorage.getItem("nomeJogador2");

jogador1Score = 0;
jogador2Score = 0;

document.getElementById("nomeJogadoro1").innerHTML = jogador1Nome + " : ";
document.getElementById("nomeJogadoro2").innerHTML = jogador2Nome + " : ";

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


questionTurn = "jogador1Nome";
answerTurn = "jogador2Nome";


function check()
{
	getAnswer = document.getElementById("input_check_box").value;
	if(getAnswer == actual_answer)	
	{
		if(answerTurn == "jogador1Nome")
		{
			jogador1Score = jogador1Score + 1;
		    document.getElementById("joga1Score").innerHTML = jogador1Score;
		}
		if(answerTurn == "jogador2Nome")
		{
			jogador2Score = jogador2Score + 1;
		    document.getElementById("joga2Score").innerHTML = jogador2Score;
		}
	}
	if(questionTurn == "jogador1Nome")
	{
		questionTurn = "jogador2Nome"
		document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta - " + jogador2Nome ;
	}
	if(questionTurn == "jogador2Nome")
	{
		questionTurn = "jogador1Nome"
		document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta - " + jogador1Nome ;
	}

	if(answerTurn == "jogador1Nome")
	{
		answerTurn = "jogador2Nome"
		document.getElementById("jogadorResposta").innerHTML = "Turno de Resposta - " + jogador2Nome;
	}
	if(answerTurn == "jogador2Nome")
	{
		answerTurn = "jogador1Nome"
		document.getElementById("jogadorResposta").innerHTML = "Turno de Resposta - " + jogador1Nome ;
	}

    document.getElementById("output").innerHTML = "";
}


