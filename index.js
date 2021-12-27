
let computerScore = 0;
let playerScore = 0;

document.querySelectorAll(".btn").forEach( button => {
    button.addEventListener("click", function(b) {
        playRound (b.target.id, computerPlay())
    })
})

// computer picks
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissor";
        case 2:
            return "paper";
    }
}

// battle
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        textChange(0);
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        textChange(1);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        textChange(2);
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        textChange(1);
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        textChange(2);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        textChange(1);
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        textChange(2);
    }
}

// text change according to result
function textChange (result) {
    switch(result) {
        case 0:
            document.querySelector(".text").textContent = "draw."
            document.querySelector(".text-2").textContent = "you:" + playerScore + " computer:" + computerScore;
            break;
        case 1:
            document.querySelector(".text").textContent = "you win.";
            document.querySelector(".text-2").textContent = "you:" + playerScore + " computer:" + computerScore;
            playerScore++;
            break;
        case 2:
            document.querySelector(".text").textContent = "you lose.";
            document.querySelector(".text-2").textContent = "you:" + playerScore + " computer:" + computerScore;
            computerScore++;
    }
}
