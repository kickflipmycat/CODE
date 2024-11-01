/*
PSEUDOCODE:
START

create Function openOtherWebsites
    Declare variable choice

    // Start an infinite loop that only breaks on valid user input
    While true
        // Prompt user to enter a choice of 1, 2, or 3
        choice = prompt user to "Enter 1, 2, or 3 to select a rock and roll website: 1. Rolling Stone. 2. Ultimate Classic Rock. 3. Loudwire"

        // Check if the user’s choice is valid
        If choice is "1" then
            Open "https://www.rollingstone.com" in a new 800x800 window
            Exit function // Exit the function if a valid choice is made

        Else if choice is "2" then
            Open "https://ultimateclassicrock.com" in a new 800x800 window
            Exit function 

        Else if choice is "3" then
            Open "https://loudwire.com" in a new 800x800 window
            Exit function 

        Else
            // If the input is invalid, alert and continue the loop
            Show alert "Invalid choice. Please enter 1, 2, or 3."
        
END.*/

function openOtherWebsites() {
    let choice;
    // Infinite loop to keep prompting the user until a valid choice is entered
    while (true) {
        //prompt user tp make a choice out of 1,2 or 3. and store it in the choice variable
        choice = prompt("Enter 1, 2, or 3 to select a rock and roll website:\n1. Rolling Stone\n2. Ultimate Classic Rock\n3. Loudwire");
        // Check if the user's choice matches one of the valid options
        if (choice === "1") {
            //open window to recommended size at the URL location from user input
            window.open("https://www.rollingstone.com", "_blank", "width=800,height=800");
            //breaks function on valid input 
            return;
        //else if for choices 2 and 3 as above
        } else if (choice === "2") {
            window.open("https://ultimateclassicrock.com", "_blank", "width=800,height=800");
            return;
        } else if (choice === "3") {
            window.open("https://loudwire.com", "_blank", "width=800,height=800");
            return;
        // else for anything that is not choice 1, 2 or 3
        } else {
            alert("Invalid choice. Please enter 1, 2, or 3.");
        }
    }
}
