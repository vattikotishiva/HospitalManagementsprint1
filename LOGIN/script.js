 // Define an array of user credentials
 


 var usersData = [
    { username: "admin", password: "password1" },
    { username: "shiva547", password: "Shiva@547" },
    { username: "santhosh", password: "123456.0 " },
    // Add more user credentials as needed
];

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from form input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    sessionStorage.setItem('username',username)

    // Check each set of user credentials
    var isAuthenticated = usersData.some(function(user) {
        return user.username === username && user.password === password;
    });

    // If any of the user credentials match, redirect to home page
    if (isAuthenticated) {
        window.location.href = "/Admin.html";
    } else {
        // Display error message or perform other actions for failed login attempt
        alert("Invalid username or password. Please try again.");
    }
});


document.getElementById('regisForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from form input
    var username = document.getElementById('username1').value;
    var password = document.getElementById('password1').value;
    sessionStorage.setItem('username',username)

    // if (!validateUsername(username)) {
    //     console.log("hiii")
    //     errorMessage.textContent = 'Username must be at least 8 characters (alphanumeric)';
    //     errorMessage.style.display = 'block';
    //     return;
    //   }
    
    //   if (!validatePassword(password)) {
    //     errorMessage.textContent = 'Password must be at least 10 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character';
    //     errorMessage.style.display = 'block';
    //     return;
    //   }

    // Check each set of user credentials
    var isAuthenticated = usersData.some(function(user) {
        return user.username === username && user.password === password;
    });

    // If any of the user credentials match, redirect to home page
    if(validateUsername(username) && validatePassword(password)){
    if (isAuthenticated) {
        window.location.href = "/index.html";
    } else {
        // Display error message or perform other actions for failed login attempt
        alert("Invalid username or password. Please try again.");
    }}else{
        alert("so sepalci");
    }
});


function validateUsername(username) {
    return username.length >= 6 && (username.match(/^[a-zA-Z0-9]+$/)); // Alphanumeric check
  }
  
  function validatePassword(password) {
    return password.length >= 9 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[^a-zA-Z0-9]/.test(password); // Special character check
  }
  


