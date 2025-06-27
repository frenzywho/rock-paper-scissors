let humanScore = 0;
let compScore = 0;
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissor");
    choice = choice.toLowerCase();
    return choice;
}
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "rock";
    }
    if (compChoice == 1) {
        return "paper";
    }
    if (compChoice == 2) {
        return "scissor";
    }
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("The Game is Drawn.");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You Win! Rock beats Scissor.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You Lose! Scissor beats Paper.");
        compScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissor.");
        compScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You Win! Scissor beats Paper.");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock.");
        compScore++;
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your Score : " + humanScore);
    console.log("Opponent's Score : " + compScore);
}
// playGame();
