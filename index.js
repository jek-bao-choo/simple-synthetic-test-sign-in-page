const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "good" && password === "notgood") {
        // If the credentials are valid, show an alert box and reload the page
        alert("Hello");
        location.reload();
    } else if (username === "好" && password === "不好") {
        alert("您好");
        location.reload();
    } else if (username === "ดี" && password === "ไม่ดี") {
        alert("สวัสดี");
        location.reload();
    }  else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})