let links = document.querySelector("#links")
let userInfo = document.querySelector("#user_info")
let user = document.querySelector("#user")
userName = localStorage.getItem("username")

if (userName) {
    links.remove();
    userInfo.style.display = "flex";
    user.innerHTML = userName;
}
let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() =>
        window.location = "login.html")
}, 1500)

/**********************/
let allProducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        imageUrl: "images/dell-latitude-3520.png",
        name: "dell i7",
        price: "1020",
        category: "laptop"
    },
    {
        id: 2,
        imageUrl: "images/dell.jpg",
        name: "dell i7",
        price: "1000",
        category: "laptop"
    },
    {
        id: 3,
        imageUrl: "images/lenouvo.jpg",
        name: "lenovo i5",
        price: "980",
        category: "laptop"
    },
    {
        id: 4,
        imageUrl: "images/redmi 9a.jpg",
        name: "redmi 9a",
        price: "280",
        category: "smartphone"
    },
    {
        id: 5,
        imageUrl: "images/honor magic.jpg",
        name: "honor magic 5",
        price: "380",
        category: "smartphone"
    },
    {
        id: 6,
        imageUrl: "images/samsong galaxi.jpg",
        name: "samsong galaxy",
        price: "350",
        category: "smartphone"
    },
    {
        id: 7,
        imageUrl: "images/redmi watch.jpg",
        name: "Xiaomi REDMI Watch 2 Lite",
        price: "150",
        category: "watch"
    },
    {
        id: 8,
        imageUrl: "images/61zltMJ+x3L._AC_UL320_.jpg",
        name: "Xiaomi Watch S1 GL",
        price: "130",
        category: "watch"
    },
    {
        id: 9,
        imageUrl: "images/51mf2B8xFuL._AC_UL320_.jpg",
        name: "Xiaomi Montre S1 Active",
        price: "160" ,
        category: "watch"
    }
]


function drawUi() {
    let y = products.map((item) => {
        return `
        <div class="product_item">
            <div class="div-img">
                <img class="product_item_img " src="${item.imageUrl}" alt="">
            </div>
            <div class="product_desc">
               <p>Product : ${item.name}</p>
               <p>Price : ${item.price} $ </p>
               <p>Category : ${item.category} </p>
            </div>
            <div class="product_item_actions">
            <button class="add-to-cart" onClick = "addToCart(${item.id})">Add to cart</button>
            <i onClick = "addToFavorite(${item.id})" class="fas fa-heart fav"></i>
            </div>
        </div>`
    })
    allProducts.innerHTML = y.join("");
}
drawUi()
let favoriteIcon = document.querySelector(".fa-heart")


let cartsProducts = document.querySelector(".carts-products")
let cartsProductsDiv = document.querySelector(".carts-products div")
let badge = document.querySelector(".shopping_cart .badge")
let numberBadge = 0;
let addedItem = []
let btnAdd = document.querySelector(".add-to-cart")
if (userName) {
    function addToCart(id) {
        let chooseItem = products.find((item) => item.id === id)
        cartsProductsDiv.innerHTML += `
        <div class = "Product-cart">
         <p> ${chooseItem.name} </p>
         <div class = "add-or-remove">
          <span id="number">1</span>
          <i style="color:green ; font-size:15px ; margin-right:3px" class="fas fa-plus"></i>
          <i style="color:red ; font-size:15px" class="fas fa-minus"></i>
          </div>
          </div> `
        numberBadge += +1;
        badge.style.display = "block"
        badge.innerHTML = numberBadge;
        addedItem = [...addedItem, chooseItem]
        localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
        let plusIcon = document.querySelector(".fa-plus")
        let minusIcon = document.querySelector(".fa-minus")

        plusIcon.onclick = addNumberItem
        minusIcon.onclick = reduceNumberItem

    

    }
} else {
    window.location = "login.html"
}
favoriteItem = []
if (userName) {
    function addToFavorite(id) {
        let chooseItem = products.find((item) => item.id === id)
        favoriteItem = [...favoriteItem, chooseItem]
        localStorage.setItem("FavoriteItems", JSON.stringify(favoriteItem))

    }
} else {
    window.location = "login.html"
}

x = 1

function addNumberItem (){
    let numberItems = document.querySelector("#number")
    x += +1
    numberItems.innerHTML = x ; 
}
function reduceNumberItem (){
    let numberItems = document.querySelector("#number")
    let ProductCart = document.querySelector(".Product-cart")
    x += -1
    numberItems.innerHTML = x ; 
    if (x == 0) {
        ProductCart.remove()
    }
}







/***********************/
let shoopingCart = document.querySelector(".shopping_cart .fa-shopping-cart")
function openCart() {
    if (cartsProductsDiv != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        } else {
            cartsProducts.style.display = "block"
        }
    }
}
shoopingCart.onclick = openCart

/**********search ********/
let searchMood = "name"

function getSearchMood(id) {
    let search = document.querySelector("#search-input")
    if (id == "search-by-name") {
        searchMood = "name"
        search.placeholder = "Search By Name"
    } else {
        searchMood = "category"
        search.placeholder = "Search By Category"
    }
    search.focus()
    search.value = ""
    drawUi()

}

let searchInput = document.querySelector("#search-input")
function searchProduct(value) {
    let allProducts = document.querySelector(".products")
    let y = "";


    if (searchMood == "name") {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name.includes(value)) {
                y +=
                    `
                        <div class="product_item">
                            <div class="div-img">
                                <img class="product_item_img " src="${products[i].imageUrl}" alt="">
                            </div>
                            <div class="product_desc">
                               <p>Product : ${products[i].name}</p>
                               <p>Price : ${products[i].price} </p>
                               <p>Category : ${products[i].category} </p>
                           </div>
                        <div class="product_item_actions">
                            <button class="add-to-cart" onClick = "addToCart(${products[i].id})">Add to cart</button>
                            <i class="far fa-heart fav"></i>
                        </div>
                    </div>`


                allProducts.innerHTML = y;


            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].category.includes(value)) {
                y +=
                    `
                        <div class="product_item">
                            <div class="div-img">
                                <img class="product_item_img " src="${products[i].imageUrl}" alt="">
                            </div>
                            <div class="product_desc">
                               <p>Product : ${products[i].title}</p>
                               <p>Price : ${products[i].price} </p>
                               <p>Category : ${products[i].category} </p>
                           </div>
                        <div class="product_item_actions">
                            <button class="add-to-cart" onClick = "addToCart(${products[i].id})">Add to cart</button>
                            <i class="far fa-heart fav"></i>
                        </div>
                    </div>`


                allProducts.innerHTML = y;
            }
        }
    }
}
