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
    let resultsArray = [];  // ordered array of roundResult values
    let gameMsg = "Let's play 5 rounds of Rock, Paper, Scissors!\n" +
        "Please enter ROCK, PAPER, or SCISSORS:\n";

    for (let i = 0; i < 5; i++) {
        // get playerSelection and determine roundResult
        let playerSelection = getPlayerSelection(gameMsg);
        if (playerSelection == "player cancelled") return;
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        // display result of round message
        alert(`Opponent chose ${computerSelection.toUpperCase()}, you ${roundResult}!`);
        // update results in message and array
        gameMsg += `Round ${i+1}: ${roundResult}\n`;
        resultsArray[i] = roundResult;
    };
    // calculate final results and display
    //   tbd...
    // alert(`Results:\n${results}`);
};

let getPlayerSelection = function(gameMsg) {
    let playerSelection;
    while(!RpsArray.includes(playerSelection)) {
        playerSelection = prompt(gameMsg);
        if (playerSelection === null) return "player cancelled";
        playerSelection = playerSelection.toLowerCase();
    };
    return playerSelection;
};