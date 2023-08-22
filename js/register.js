let userName = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registreBtn = document.querySelector("#submit")

registreBtn.addEventListener( "click", function registre (e) {
    e.preventDefault()
    if (userName.value === "" || email.value === "" || password.value === ""){
        alert("please fill data")
    }else {
        localStorage.setItem("username" , userName.value)
        localStorage.setItem("password" , password.value)
        localStorage.setItem("email" , email.value)

        setTimeout (function() {
            window.location = "login.html"
        },1000)
    }
})

