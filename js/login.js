let userName = document.querySelector("#username")
let password = document.querySelector ("#password")
let loginBtn = document.querySelector ("#submit")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function (e) {
    e.preventDefault();
    if (userName === "" || password === "") {
        alert("please fill data")
    }
    else {
        if (getUser&&getUser.trim()=== userName.value.trim() && getPassword && getPassword.trim() === password.value) {
            setTimeout( () => {
                window.location = "index.html";
            } , 1500)
        } else {
            alert("username or password was wrong")
        }
    }
})
