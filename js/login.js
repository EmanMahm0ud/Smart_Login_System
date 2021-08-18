
var email = document.getElementById("email");
var password = document.getElementById("password");

var users;
if (localStorage.getItem("accounts") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("accounts"));
}

function login() {

    if (isEmpty()) {
        document.getElementById("loginMessage").innerHTML = "All fields are required";
    } else if (isFound()) {
        location.replace('home.html');
    } else {
        document.getElementById("loginMessage").innerHTML = "Incorrect email or password";
    }
}

function isEmpty() {
    if (email.value != "" && password.value != "") {
        return false;
    } else {
        return true;
    }
}

function isFound() {
    for (var i = 0; i < users.length; i++) {
        if (email.value == users[i].userEmail && password.value == users[i].userPassword) {
            localStorage.setItem("userName",users[i].userName);
            return true;
        }
    }
    return false;
}

//------------home-------------------------

function welcome(){
    document.getElementById("welcome").innerHTML = "Welcome " + localStorage.getItem("userName");
}

function logout(){
    location.replace('file:///F:/Training/A3-Validation//index.html');
}
