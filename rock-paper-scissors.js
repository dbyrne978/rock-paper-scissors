// DOM manipulation
const rock = document.createElement("button");
rock.classList.add("button", "rock");
rock.textContent = "Rock";
container.appendChild(rock);

const paper = document.createElement("button");
paper.classList.add("button", "paper");
paper.textContent = "Paper";
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.classList.add("button", "scissors");
scissors.textContent = "Scissors";
container.appendChild(scissors);

// functions
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
    };
};

let game = function() {
    let resultsArray = [];  // ordered array of roundResult values
    let gameMsg = "Let's play 5 rounds of Rock, Paper, Scissors!\n" +
            "Please enter ROCK, PAPER, or SCISSORS:\n";
    let originalGameMsgLength = gameMsg.length;

    for (let i = 0; i < 5; i++) {
        // get playerSelection and determine roundResult
        let playerSelection = getPlayerSelection(gameMsg);
        if (playerSelection == "player cancelled") return;
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        // display result of round message
        alert(`Opponent chose ${computerSelection.toUpperCase()}, ` +
                `you ${roundResult}!`);
        // update results in gameMsg and resultsArray
        gameMsg += `Round ${i+1}: ${roundResult}\n`;
        resultsArray[i] = roundResult;
    };
    let gameResultMsg = calculateGameResult(resultsArray);
    // display final results message
    alert(`${gameMsg.substring(originalGameMsgLength)}\n${gameResultMsg}`);
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

let calculateGameResult = function(resultsArray) {
    let wins = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i] == "win") wins++;
        if (resultsArray[i] == "lose") wins--;
    };
    if (wins == 0) return "The overall game was a tie!";
    if (wins < 0) return "You lost the overall game!";
    if (wins > 0) return "You won the overall game!";
};