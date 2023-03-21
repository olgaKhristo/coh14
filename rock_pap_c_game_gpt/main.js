// Get the buttons and result element
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultEl = document.getElementById("result");

// Define the game function
function playGame(userChoice) {
    // Get the computer's choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    if (userChoice === computerChoice) {
        resultEl.textContent = "Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultEl.textContent = "You win!";
    } else {
        resultEl.textContent = "You lose!";
    }
}

// Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    playGame("rock");
});

paperBtn.addEventListener("click", function () {
    playGame("paper");
});

scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
});