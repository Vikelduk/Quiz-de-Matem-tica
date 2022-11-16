function addUser()
{
    jogador1 = document.getElementById("nomeJogadora1").value;
    jogador2 = document.getElementById("nomeJogadora2").value;

    localStorage.setItem("nomeJogador1", jogador1);
    localStorage.setItem("nomeJogador2", jogador2);

    window.location = "game_page.html";
}