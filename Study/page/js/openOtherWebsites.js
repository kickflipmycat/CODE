/*
Function openOtherWebsites
    Declare variable choice

    // Start an infinite loop that only breaks on valid input
    While true
        // Prompt user to enter a choice of 1, 2, or 3
        choice = prompt user to "Enter 1, 2, or 3 to select a rock and roll website: 1. Rolling Stone. 2. Ultimate Classic Rock. 3. Loudwire"

        // Check if the user’s choice is valid
        if choice is null then alert for valid input.
        
        Else if choice is "1" then
            Redirect to "https://www.rollingstone.com"
            Exit function // Exit the function if a valid choice is made
        Else if choice is "2" then
            Redirect to "https://ultimateclassicrock.com"
            Exit function
        Else if choice is "3" then
            Redirect to "https://loudwire.com"
            Exit function
        Else
            // If the choice is invalid, display an alert and continue the loop
            Show alert "Invalid choice. Please enter 1, 2, or 3."
        
        End of code.
        */
function openOtherWebsites() {
    let choice;
    // Infinite loop to keep prompting the user until a valid choice is entered
    while (true) {
        choice = prompt("Enter 1, 2, or 3 to select a rock and roll website:\n1. Rolling Stone\n2. Ultimate Classic Rock\n3. Loudwire");
        //if (choice === null) {
        //  alert("please enter a number");
       // }
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
