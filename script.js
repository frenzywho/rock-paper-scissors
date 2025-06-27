let humanScore = 0;
let compScore = 0;
const middle = document.getElementsByClassName("middle");

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
    console.log("playRound called with:", humanChoice, "vs", computerChoice);
    let roundResult = "";
    if (humanChoice === computerChoice) {
        roundResult = "Draw! Both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        console.log("The Game is Drawn.");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        roundResult = "You Win! Rock beats Scissor.";
        console.log(roundResult);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        roundResult = "You Lose! Scissor beats Paper.";
        console.log(roundResult);
        compScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResult = "You Win! Paper beats Rock.";
        console.log(roundResult);
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        roundResult = "You Lose! Rock beats Scissor.";
        console.log(roundResult);
        compScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        roundResult = "You Win! Scissor beats Paper.";
        console.log(roundResult);
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundResult = "You Lose! Paper beats Rock.";
        console.log(roundResult);
        compScore++;
    }
    // Update scorecard on the page
    const humanScoreSpan = document.getElementById("humanScore");
    const compScoreSpan = document.getElementById("compScore");
    if (humanScoreSpan) humanScoreSpan.textContent = humanScore;
    if (compScoreSpan) compScoreSpan.textContent = compScore;
    // Append round result to history
    let historyDiv = document.getElementById("round-history");
    if (!historyDiv) {
        historyDiv = document.createElement("div");
        historyDiv.id = "round-history";
        historyDiv.style.marginTop = "24px";
        historyDiv.style.maxHeight = "180px";
        historyDiv.style.overflowY = "auto";
        historyDiv.style.width = "100%";
        middle[0].appendChild(historyDiv);
    }
    if (historyDiv && roundResult) {
        const entry = document.createElement("div");
        entry.style.padding = "6px 0";
        entry.style.borderBottom = "1px solid #444";
        entry.style.fontSize = "16px";
        entry.innerHTML = `<b>You:</b> ${humanChoice} &nbsp; <b>Computer:</b> ${computerChoice} &nbsp; <span style='color:${roundResult.includes("Win") ? "#4caf50" : roundResult.includes("Lose") ? "#e53935" : "#ffd600"}'>${roundResult}</span>`;
        historyDiv.appendChild(entry);
        // Optionally, scroll to bottom
        historyDiv.scrollTop = historyDiv.scrollHeight;
    }
    // Only create and show result div when someone reaches 5 points
    if (humanScore >= 5 || compScore >= 5) {
        let resultDiv = document.getElementById("result-display");
        if (!resultDiv) {
            resultDiv = document.createElement("div");
            resultDiv.id = "result-display";
            resultDiv.style.fontSize = "22px";
            middle[0].appendChild(resultDiv);
        }
        if (humanScore > compScore) {
            resultDiv.textContent = "🎉 You win the game!";
            resultDiv.style.color = 'blue';
        } else if (compScore > humanScore) {
            resultDiv.textContent = "👎 Computer wins the game!";
            resultDiv.style.color = 'red';
        } else {
            resultDiv.textContent = "It's a draw!";
        }
        // Reset scores for a new game
        humanScore = 0;
        compScore = 0;
        if (humanScoreSpan) humanScoreSpan.textContent = humanScore;
        if (compScoreSpan) compScoreSpan.textContent = compScore;
        // Clear round history
        if (historyDiv) historyDiv.remove();
    } else {
        // Remove result div if it exists
        let resultDiv = document.getElementById("result-display");
        if (resultDiv) {
            resultDiv.remove();
        }
    }
}
function getHumanChoice() {
    const buttons = document.querySelectorAll("button");
    let choiceText = document.createElement("div");
    let compText = document.createElement("div");
    console.log("Found buttons:", buttons.length);
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            console.log("Button clicked:", e.currentTarget.id);
            let choice;
            switch (e.currentTarget.id) {
                case "rockBtn":
                    choice = "rock";
                    break;
                case "paperBtn":
                    choice = "paper";
                    break;
                case "scissorsBtn":
                    choice = "scissor";
                    break;
                default:
                    console.log("Unknown button ID:", e.target.id);
            }
            middle[0].appendChild(choiceText);

            console.log("Choice after switch:", choice);
            if (choice) {
                console.log("About to get computer choice...");
                const computerChoice = getComputerChoice();
                console.log("Computer chose:", computerChoice);
                // Display computer choice
                console.log("About to call playRound...");
                playRound(choice, computerChoice);
            } else {
                console.log("No choice was set!");
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', getHumanChoice);