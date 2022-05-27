let RpsArray = ["rock", "paper", "scissors"];

let computerPlay = function() {
    return RpsArray[Math.floor(Math.random() * 3)];
};

let playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) return "tie";
    switch (playerSelection) {
        case "rock":
            return (computerSelection == "paper") ? "lose" : "win";
        case "paper":
            return (computerSelection == "scissors") ? "lose" : "win";
        case "scissors":
            return (computerSelection == "rock") ? "lose" : "win";
    }
};