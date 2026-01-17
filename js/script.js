


 function login_user() {
const db_password = 1234;
const db_user_name = "bigun"

const input_user_name = document.getElementById("username").value;
const input_user_pasword = Number(document.getElementById("password").value);


    if (db_user_name === input_user_name && db_password === input_user_pasword) {
        window.location.href = "Dashboard.html";
    } else {
        alert("invalid user name or  password")
    };

}