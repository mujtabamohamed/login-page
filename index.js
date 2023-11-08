const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    const validUsername = "admin";
    const validPassword = "1234";

    if(username.value == validUsername && password.value == validPassword) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        if(username.value !== validUsername) {
            usernameError.innerHTML = "Invalid username";
        }
        if(password.value !== validPassword) {
            passwordError.innerHTML = "InvalidPassword";
        }
    }
});