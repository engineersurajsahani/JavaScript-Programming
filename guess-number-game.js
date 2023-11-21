function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getUserGuess() {
    while (true) {
        const userGuess = parseInt(prompt("Enter your guess (between 1 and 100):"));
        if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
            return userGuess;
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
}

function evaluateGuess(userGuess, targetNumber) {
    if (userGuess === targetNumber) {
        return "Congratulations! You guessed the correct number.";
    } else if (userGuess < targetNumber) {
        return "Too low. Try again.";
    } else {
        return "Too high. Try again.";
    }
}

function playGame() {
    alert("Welcome to the Number Guessing Game!\nI have selected a random number between 1 and 100. Try to guess it.");

    const targetNumber = generateRandomNumber();

    while (true) {
        const userGuess = getUserGuess();

        const result = evaluateGuess(userGuess, targetNumber);
        alert(result);

        const playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            alert(`The correct number was ${targetNumber}. Thanks for playing. Goodbye!`);
            break;
        }
    }
}

// Start the game
playGame();
