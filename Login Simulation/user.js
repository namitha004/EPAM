// Hardcoded list of users
var users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
    { username: "guest", password: "guest123" }
];
// Function to check credentials
function checkLogin() {
    var uInput = document.getElementById("username").value;
    var pInput = document.getElementById("password").value;
    var result = document.getElementById("result");
    var found = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === uInput && users[i].password === pInput) {
            found = true;
            break;
        }
    }
    if (found) {
        result.textContent = "✅ Login Successful!";
        result.style.color = "green";
    }
    else {
        result.textContent = "❌ Invalid username or password.";
        result.style.color = "red";
    }
}
