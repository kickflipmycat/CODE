function opengoogle() {
    window.location = "www.google.com.au"
}
function pressButton() {
	var myDemo =document.getElementById("demo");
	myDemo.innerHTML="Wow! The button was pressed";
	return;
}
function nameSelection() {
    var name = prompt("which website would you like?");
    if (name != null) {
        alert("Welcome " + name);
    } 
    else {
        alert("You did not enter a name!");
    }
    return;
}
function openOtherWebsites() {
    
    return;
}
