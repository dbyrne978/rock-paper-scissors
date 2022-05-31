// global variables
const rpsArray = ["rock", "paper", "scissors"];
let resultsArray = [];  // ordered array of results
let currentRound = 1;

// DOM manipulation
const rock = document.createElement("button");
rock.classList.add("button", "rock");
rock.textContent = "rock";
buttons.appendChild(rock);

const paper = document.createElement("button");
paper.classList.add("button", "paper");
paper.textContent = "paper";
buttons.appendChild(paper);

const scissors = document.createElement("button");
scissors.classList.add("button", "scissors");
scissors.textContent = "scissors";
buttons.appendChild(scissors);

const buttonList = document.querySelectorAll("button");
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
            return (computerSelection == "paper") ? "lose" : "win";
        case "paper":
            return (computerSelection == "scissors") ? "lose" : "win";
        case "scissors":
            return (computerSelection == "rock") ? "lose" : "win";
    };
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

let onPlayerSelection = function(playerSelection) {
    // determine result
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    resultsArray[currentRound] = result;
    
    // determine resultText
    let resultText = "";
    if (result == "win") {
        resultText = `Round ${currentRound}: ${result}, `+
                `${playerSelection} beats ${computerSelection}.`;
    } else if (result == "lose") {
        resultText = `Round ${currentRound}: ${result}, `+
                `${computerSelection} beats ${playerSelection}.`;
    } else if (result == "tie") {
        resultText = `Round ${currentRound}: ${result}, `+
                `you both picked ${playerSelection}.`;
    };

    // display resultText
    //   tbd

    // maybe display final score
    //   tbd

    // testing with console log
    console.log(result, playerSelection, computerSelection, resultText);
};