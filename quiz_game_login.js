function addUser() {

    player1_name = document.getElementById("pl1NameInput").value;
    player2_name = document.getElementById("pl2NameInput").value;
    
    localStorage.setItem("player_1", player1_name);
    localStorage.setItem("player_2", player2_name);
    
    window.location = "quiz_game_page.html";
    }