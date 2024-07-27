document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();   
    var username = document.getElementById("un").value;
    var password = document.getElementById("pwd").value;

    if (username === "Ragavallika" && password === "Raga@123$") {
        alert("Login Successful");
        window.location.href = "WebProfile.html";
    } else if (username === "" && password === "") {
        alert("Enter Username and password to login");
    } else {
        alert("Invalid username or password");
    }
});

document.getElementById("registerButton").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Register.html";
});
