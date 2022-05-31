// global variables
const rpsArray = ["rock", "paper", "scissors"];
let resultsArray = [];  // ordered array of results
let currentRound = 1;
const roundResultLog = document.querySelector('#round-result-log');

// playerSelectionButton functionality
const buttonList = document.querySelectorAll(".player-selection-button");
buttonList.forEach((button) => {
    button.addEventListener("click", e => {
        onPlayerSelection(e.target.innerText);
    });
});

// functions
let computerPlay = function() {
    return rpsArray[Math.floor(Math.random() * 3)];
};

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "tie";
    switch (playerSelection) {
        case "rock":
            return (computerSelection == "paper") ? "loss" : "win";
        case "paper":
            return (computerSelection == "scissors") ? "loss" : "win";
        case "scissors":
            return (computerSelection == "rock") ? "loss" : "win";
    };
};

let onPlayerSelection = function(playerSelection) {
    // determine result
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    resultsArray[currentRound-1] = result;
    
    // determine resultText
    let resultText = "";
    if (result == "win") {
        resultText = `Round ${currentRound}: ${result}, `+
                `${playerSelection} beats ${computerSelection}.`;
    } else if (result == "loss") {
        resultText = `Round ${currentRound}: ${result}, `+
                `${computerSelection} beats ${playerSelection}.`;
    } else if (result == "tie") {
        resultText = `Round ${currentRound}: ${result}, `+
                `you both picked ${playerSelection}.`;
    };

    // display resultText
    let resultTextDiv = document.createElement("div");
    resultTextDiv.classList.add("round-result");
    resultTextDiv.textContent = resultText;
    roundResultLog.appendChild(resultTextDiv);

    // maybe calculate and display final results
    if (currentRound == 5) {
        let finalResults = calculateFinalResults();
        displayFinalResults(finalResults);
        disableButtons();
        addReplayButton();
    };
    currentRound++;
};

let calculateFinalResults = function() {
    // determine final results
    let wins = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i] == "win") wins++;
        if (resultsArray[i] == "loss") wins--;
    };
    if (wins == 0) return "The overall game was a tie!";
    if (wins < 0) return "You lost the overall game!";
    if (wins > 0) return "You won the overall game!";
};

let displayFinalResults = function(finalResults) {
    const finalResultDiv = document.querySelector('#final-results');
    finalResultDiv.textContent = finalResults;
};

let disableButtons = function() {
    buttonList.forEach((button) => {
        button.disabled = true;
    });
};

let addReplayButton = function() {
    const replayButton = document.createElement("button");
    replayButton.classList.add("replay-button");
    replayButton.textContent = "Play again?";
    replayButton.addEventListener("click", () => {
        location.reload();
    });
    document.body.appendChild(replayButton);
}