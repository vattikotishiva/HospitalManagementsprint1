let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
 // Function to display the username on the home page
 function displayUsername() {
    // Retrieve the username from session storage
    var username = sessionStorage.getItem('username');

    if (username) {
        // If username is available, display it
        document.getElementById('user-info').innerHTML = '<p>' +"Mr." + username +" Make Appointment"+ '</p>';
    } 
    // else {
    //     // If username is not available, redirect to login page
    //     window.location.href = "index.html";
    // }
}

window.onload = displayUsername;



// Function to logout the user
function logout() {
    // Clear username from session storage
    sessionStorage.removeItem('username');
     console.log("hiii")
    // Redirect to logout page or login page
    window.location.href = "index.html"; // Replace with your logout page URL
}

// Call the function to display the username when the page loads






var condition = false;
var usern = sessionStorage.getItem('username');

if(usern!= null){
    condition = true
}



var textElement = document.getElementById("conditionalText");
if (condition) {
    // If condition is true, make the text visible
    textElement.style.display = "none";
} else {
    // If condition is false, hide the text
    textElement.style.display = "block";
}

var textElement = document.getElementById("conditionalText1");
if (condition) {
    // If condition is true, make the text visible
    textElement.style.display = "block";
} else {
    // If condition is false, hide the text
    textElement.style.display = "none";
}