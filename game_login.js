function login(){
    player1=document.getElementById("player_1");
    player2=document.getElementById("player_2");

    localStorage.setItem("player_1", player1);
    localStorage.setItem("player_2",  player2);

    window.location="game_page.html" 
}