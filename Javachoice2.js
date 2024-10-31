// Define URLs associated with each choice
const urls = {
    1: "https://www.rollingstone.com",
    2: "https://www.classicrockmagazine.com",
    3: "https://www.kerrang.com"
};

// Initialize a variable to keep track of valid input
let validChoice = false;

// Continuously prompt until the user provides a valid choice (1, 2, or 3)
while (!validChoice) {
    let userChoice = prompt("Enter a number to visit a rock-themed website:\n1. Rolling Stone\n2. Classic Rock Magazine\n3. Kerrang");

    // Convert input to integer
    userChoice = parseInt(userChoice, 10);

    // Check if input is valid (1, 2, or 3)
    if (urls[userChoice]) {
        // Redirect to the selected website if valid
        window.location.href = urls[userChoice];
        validChoice = true; // Break out of the loop
    } else {
        // Notify the user of invalid input
        alert("Invalid choice! Please enter 1, 2, or 3.");
    }
}