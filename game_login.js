function addUser()
{
    jogador1 = document.getElementById("player1NameInput").value;
    jogador2 = document.getElementById("player2NameInput").value;

    localStorage.setItem("nomeJogador1", nomeJogador1);
    localStorage.setItem("nomeJogador2", nomeJogador2);

    window.location = "game_page.html";
}