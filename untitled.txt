// Function for selecting a rock and roll website
function selectWebsite() {
    let choice;
    // Infinite loop to keep prompting the user until a valid choice is entered
    while (true) {
        choice = prompt("Enter 1, 2, or 3 to select a rock and roll website:\n1. Rolling Stone\n2. Ultimate Classic Rock\n3. Loudwire");

        // Check if the user's choice matches one of the valid options
        if (choice === "1") {
            window.location.href = "https://www.rollingstone.com";
            return; // Exit the function if the user made a valid choice
        } else if (choice === "2") {
            window.location.href = "https://ultimateclassicrock.com";
            return;
        } else if (choice === "3") {
            window.location.href = "https://loudwire.com";
            return;
        } else {
            // If the choice is invalid, show an alert and continue the loop
            alert("Invalid choice. Please enter 1, 2, or 3.");
        }
    }
}