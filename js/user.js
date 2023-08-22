let links = document.querySelector("#links")
let userInfo = document.querySelector("#user_info")
let user = document.querySelector ("#user")
userName = localStorage.getItem("username")

if (userName) {
    links.remove();
    userInfo.style.display = "flex";
    user.innerHTML = userName ;
}

let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(()=> 
    window.location = "login.html")
},1500)