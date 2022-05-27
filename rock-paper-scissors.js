let RpsArray = ["rock", "paper", "scissors"];

let computerPlay = function() {
    return RpsArray[Math.floor(Math.random() * 3)];
};

let playRound = function(playerSelection, computerSelection) {
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

let game = function() {
    let gameMsg = "Let's play 5 rounds of Rock, Paper, Scissors!\n" +
        "Please enter rock, paper, or scissors:\n";

    for (let i = 0; i < 5; i++) {
        getPlayerSelection(gameMsg);
        // determineWinner
        //   tbd...
        // updateResults
        gameMsg = gameMsg + `Round ${i+1}: PLACEHOLDER RESULT\n`;
    };
    // calculate final results and display
    //   tbd...
    // alert(`Results:\n${results}`);
};

let getPlayerSelection = function(gameMsg) {
    let playerSelection;
    while(!RpsArray.includes(playerSelection)) {
        playerSelection = prompt(gameMsg);
        if (playerSelection === null) return;
        playerSelection = playerSelection.toLowerCase();
    };
};