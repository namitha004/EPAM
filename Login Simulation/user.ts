interface User {
    username: string;
    password: string;
  }
  
  // Hardcoded list of users
  const users: User[] = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
    { username: "guest", password: "guest123" }
  ];
  
  // Function to check credentials
  function checkLogin() {
    const uInput = (document.getElementById("username") as HTMLInputElement).value;
    const pInput = (document.getElementById("password") as HTMLInputElement).value;
    const result = document.getElementById("result") as HTMLDivElement;
  
    let found = false;
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === uInput && users[i].password === pInput) {
        found = true;
        break;
      }
    }
  
    if (found) {
      result.textContent = "✅ Login Successful!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Invalid username or password.";
      result.style.color = "red";
    }
  }
  