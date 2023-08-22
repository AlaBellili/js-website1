let productsInCart = localStorage.getItem("ProductsInCart")
let FavoriteItems = localStorage.getItem("FavoriteItems")
let allProducts = document.querySelector(".products")
let favoriteItem = document.querySelector(".favorite")
if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawProductCart(item)
}
if (FavoriteItems) {
    let item = JSON.parse(FavoriteItems)
    drawProductFavorite(item)
}


function drawProductCart(products) {
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img " src="${item.imageUrl}" alt="">
        <div class="product_desc">
        <p>Product : ${item.name}</p>
        <p>Price : ${item.price} $ </p>
        <p>Category : ${item.category} </p>
         </div>
         <div class="product_item_actions">
            <button style = "background-color:red" class="add-to-cart" onClick = "removeFromCart(${item.id})">Remove from cart</button>
        </div>
    </div>`
    })
    allProducts.innerHTML = y.join("");
}

function drawProductFavorite(products) {
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img " src="${item.imageUrl}" alt="">
        <div class="product_desc">
        <p>Product : ${item.name}</p>
        <p>Price : ${item.price} $ </p>
        <p>Category : ${item.category} </p>
         </div>
         <div class="product_item_actions">
            <button style = "background-color:red" class="add-to-cart" onClick = "removeFromFavotite(${item.id})">Remove from favorite</button>
        </div>
    </div>`
    })
    favoriteItem.innerHTML = y.join("");
}

function removeFromCart (id) {
    if(productsInCart) {
        let productsInCart = localStorage.getItem("ProductsInCart")
        let item = JSON.parse (productsInCart)

        let filterItem = item.filter((item)=> item.id !== id)
        let removedItem = item.filter((item)=> item.id == id)

        localStorage.setItem ('ProductsInCart' , JSON.stringify(filterItem))
        drawProductCart(filterItem)
        totalPricefunction2(removedItem)
    }
}

function removeFromFavotite (id) {
    if(FavoriteItems) {
        let FavoriteItems = localStorage.getItem("FavoriteItems")
        let item = JSON.parse (FavoriteItems)

        let filterItem = item.filter((item)=> item.id !== id)

        localStorage.setItem ('FavoriteItems' , JSON.stringify(filterItem))
        drawProductFavorite(filterItem)

    }
}


let TotalPrice = document.querySelector(".Totat-price")
let item = JSON.parse(productsInCart)

let x = 0
function totalPricefunction(products) {
    let totalPrice = products.map((item) => {
        x += +item.price 
    })
    TotalPrice.innerHTML = "Total Price : " + x + " $"
}
totalPricefunction(item)

function totalPricefunction2(products) {
    let totalPrice = products.map((item) => {
        x -= +item.price 
    })
    TotalPrice.innerHTML = "Total Price : " + x + " $"
}
