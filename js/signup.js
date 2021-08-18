
var uname = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var users;
if (localStorage.getItem("accounts") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("accounts"));
}

function signup() {

    if (isEmpty()) {
        document.getElementById("loginMessage").innerHTML = "All fields are required";
        document.getElementById("loginMessage").setAttribute("class", "text-danger");
    } else if (isFound()) {
        document.getElementById("loginMessage").innerHTML = "Email is found";
        document.getElementById("loginMessage").setAttribute("class", "text-danger");
    } else {
        var user = {
            userName: uname.value,
            userEmail: email.value,
            userPassword: password.value
        }

        document.getElementById("loginMessage").innerHTML = "Success";
        document.getElementById("loginMessage").setAttribute("class", "text-success");
        users.push(user);
        localStorage.setItem("accounts", JSON.stringify(users));
    }
}

function isEmpty() {
    if (uname.value != "" && email.value != "" && password.value != "") {
        return false;
    } else {
        return true;
    }
}

function isFound() {
    for (var i = 0; i < users.length; i++) {
        if (email.value == users[i].userEmail) {
            return true;
        }
    }
    return false;
}