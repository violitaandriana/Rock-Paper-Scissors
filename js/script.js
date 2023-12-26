// Flow game rock paper scissors:
// 1. terima input user
// 2. check input dibandingin sama komputer
// 3. tampilin yang menang siapa yang kalah siapa
// 4. Main sampai yang score nya 5 duluan menang

const rps = ["rock", "paper", "scissors"];
let userScore = 0, npcScore = 0;

// Score
const user_score = document.getElementById("user_score");
const comp_score = document.getElementById("comp_score");

// Button 
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetButton");
const playAgain = document.getElementById("playAgain");

// event listener jika button di-click
rockButton.addEventListener("click", function () {
    playGame("rock");
});
paperButton.addEventListener("click", function () {
    playGame("paper");
});
scissorsButton.addEventListener("click", function () {
    playGame("scissors");
});
resetButton.addEventListener("click", resetGame);

function computerInput() {
    let randomIdx = Math.floor(Math.random() * 3);
    return rps[randomIdx];
}

function scoring(user, npc) {
    let resultMsg = "";
    switch (true) {
        case user === npc:
            resultMsg = "It's a draw!";
            break;
        case (user === "rock" && npc === "scissors"):
        case (user === "paper" && npc === "rock"):
        case (user === "scissors" && npc === "paper"):
            userScore++;
            resultMsg = "You win! " + user + " beats " + npc;
            break;
        default:
            npcScore++;
            resultMsg = "You lose! " + npc + " beats " + user;
            break;
    }
    result.innerHTML = resultMsg;
    user_score.innerHTML = userScore;
    comp_score.innerHTML = npcScore;

    if (userScore >= 5 || npcScore >= 5) {
        playAgain.innerHTML = "Game Over, Play Again?";
        resetButton.style.display = "flex";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function playGame(userInput) {
    let usrInput = userInput;
    let npcInput = computerInput();
    scoring(usrInput, npcInput);
}

function resetGame() {
    userScore = 0;
    npcScore = 0;
    result.innerHTML = "";
    resetButton.style.display = "none";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    user_score.innerHTML = userScore;
    comp_score.innerHTML = npcScore;
    playAgain.innerHTML = "";
}

// function main() {
//     while (true) {
//         playGame();
//         resetGame();
//     }
// }

// main();

// function userInput() {
//     let user = "";
//     do {
//         user = prompt("Rock / Paper / Scissors");
//         console.log(user);
//     } while (!rps.find((element) => element == user));
//     return user;
// }
// function gameFlow(usr) {
//     // user input
//     let usrInput = usr;
//     // npc input
//     let npcInput = computerInput();
//     scoring(usrInput, npcInput);
// }