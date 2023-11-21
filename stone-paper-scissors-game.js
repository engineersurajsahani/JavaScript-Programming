function getUserChoice() {
    let userChoice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        userChoice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
    }
    return userChoice;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    alert("Welcome to Rock, Paper, Scissors!");
    
    while (true) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        alert(`You chose ${userChoice}\nComputer chose ${computerChoice}`);

        const result = determineWinner(userChoice, computerChoice);
        alert(result);

        const playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            alert("Thanks for playing. Goodbye!");
            break;
        }
    }
}

// Start the game
playGame();
