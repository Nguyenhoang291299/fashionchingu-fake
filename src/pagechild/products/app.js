
const products = document.querySelector('.products');
const inputForm = document.querySelector('#input-form');
const header = document.querySelector('#header');
const openBag = document.querySelector(".bi-bag");
const closeBag = document.querySelector(".close-cart .bi-x-lg");
const listCart = document.querySelector(".product-cart");
const count = document.querySelector(".count");
const cartCtn = document.querySelector(".cart-content");
const courseApi = `http://localhost:3002/products`;
function start() {
    getCourse(renderCourse);
}
start()

let carts = []
function getCourse(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback) 
}
function renderCourse(courses) {
    const coursess = JSON.parse(localStorage.getItem("products"));
    const htmls = coursess.map((course) => { 
        return `
        <div class="product" >
            <a href="#">
                <div class="condition">${course.condition}</div>
                <div  class="img-item">
                    <img src="${course.image.imgSub0}" alt="">
                </div>
                <div class="mt_10 name" style="font-size: 15px">${course.name}</div>
                <div style="width: 50%; float: left">
                    <div class="color">${course.color}</div>
                    <div class="price">${course.price}$</div>
                </div>
                <div class="btn">
                    <button class="btn-buy">Buy</button>
                    <button class="btn-add" data-id="${course.id}"><i class="bi bi-cart-plus-fill"></i></button>
                </div>
            </a>
        </div>`
    });
    products.innerHTML = htmls.join('');

    const getBagBtn = () => {
        const btns = [...document.querySelectorAll(".btn-add")]
        btns.forEach((btn) => {
            let id = btn.dataset.id;
            // let inCart = carts.find(cart => cart.id === id)
            btn.onclick = (e) => {
                e.preventDefault();
                let cartItems = {...getProduct(id)};
                carts = [...carts,cartItems];
                localStorage.setItem("carts", JSON.stringify(carts));
                setCartValue(carts);
                addCartItem(carts);
                removeCart(carts);
            }
        })
    };
    getBagBtn()
    const addCartItem = (cartItems) => {
        const div = cartItems.map(cartItem => (
            `
        <div class="cart-item mc-5">
            <div class="img-cart mr-10"><img src="${cartItem.image.imgSub0}" alt="" style="width: 96px; height: 120px"></div>
            <div class="mr-10">
                <div>
                    <div class="name-item">${cartItem.name}</div>
                    <div class="color-item"><div></div></div>
                    <div class="size-item">${cartItem.size}</div>
                </div>
            </div>
            <div class="price-item mr-10">${cartItem.price}$</div>
            <div>
                <div class="quantity-item"><input type="number" min="0"></div>
                <button class="trash-item" data-id="${cartItem.id}"><i class="bi bi-trash-fill"></i></button>
            </div>
        </div>`
        ))
        cartCtn.innerHTML = div.join('')
    }
    const getProduct = (id) => {
        const itemCarts = JSON.parse(localStorage.getItem("products"))
        return itemCarts.find(itemCart => itemCart.id === id)
    }
    const setCartValue = (carts) => {
        let amount;
        let tempTotal;
        let itemTotal = carts.length;

        count.innerText = itemTotal
    }
    const removeCart =(cartItems) => {
        // cartItems = JSON.parse(localStorage.getItem("carts"))
        const btnTrashs = [...document.querySelectorAll(".trash-item")];
        btnTrashs.map(btnTrash => {
            const id = btnTrash.dataset.id
            btnTrash.addEventListener("click", ()=> {
                cartCtn.removeChild(btnTrash.parentElement.parentElement);
                
           })
        })
    }

    // save data in localStorage
    localStorage.setItem("products", JSON.stringify(courses))
    
}
// Open close cart
function handleOCCart() {
    openBag.onclick = function () {
        listCart.style.display = "block";
    } 
    closeBag.onclick = function () {
        listCart.style.display = "none";
    }
}
handleOCCart()
