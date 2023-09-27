// Function to perform basic arithmetic operations
function calculator() {
    // Prompt the user for the operation
    var operation = prompt("Enter an operation (+, -, *, /):");

    // Prompt the user for two numbers
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    // Check the selected operation and perform the calculation
    if (operation === "+") {
        var result = num1 + num2;
        alert("Result: " + result);
    } else if (operation === "-") {
        var result = num1 - num2;
        alert("Result: " + result);
    } else if (operation === "*") {
        var result = num1 * num2;
        alert("Result: " + result);
    } else if (operation === "/") {
        // Check for division by zero
        if (num2 !== 0) {
            var result = num1 / num2;
            alert("Result: " + result);
        } else {
            alert("Error: Division by zero!");
        }
    } else {
        alert("Invalid operation");
    }
}

// Call the calculator function to start the program
calculator();
