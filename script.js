function showRegister() {
    document.getElementById("registerSection").style.display = "block";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("securedSection").style.display = "none";
}

function showLogin() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("securedSection").style.display = "none";
}

function register() {
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful!");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (localStorage.getItem(username) === password) {
        document.getElementById("userDisplay").innerText = username;
        document.getElementById("registerSection").style.display = "none";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("securedSection").style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function logout() {
    showLogin();
}
