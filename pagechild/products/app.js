const products = document.querySelector('.products');
const product = products.children;

const inputForm = document.querySelector('#input-form');

// const prevPage = document.querySelector('.bi-caret-left-fill');
// const nextPage = document.querySelector('.bi-caret-right-fill');
// const clothing = document.querySelector("#clothing");
// const prices = document.querySelector("#price");

const courseApi = `http://localhost:3000/products`;
function start() {
    getCourse(renderCourse);
}
start()

function getCourse(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback) 
}
function renderCourse(courses) {

    const htmls = courses.map((course,index) => { 
        return `
        <div class="product" data-id="${index}">
            <a href="#"  onclick="showId(${index})"">
                <div class="condition">${course.condition}</div>
                <div  class="img-item">
                    <img src="${course.image.imgSub0}" alt="">
                </div>
                <div class="mt_10">
                    <div class="name">${course.name}</div>
                    <div class="color">${course.color}</div>
                    <div class="price">${course.price}$</div>
                </div>
            </a>
        </div>
        `;
    })
    products.innerHTML = htmls.join('');
        // filter products by type
        //  clothing.addEventListener('change', ()=> {
        //     const clothingValue = clothing.value;
        //     const selectedClothingArrs = [];
        //     const filterProducts = document.querySelector('.filterProducts');
        //     courses.filter(course => { 
        //         if(course.type === clothingValue)
        //         {
        //             selectedClothingArrs.push(course)
        //             if(selectedClothingArrs.length > 0) {
        //                 products.style.display = 'none'
        //                 const htmlss = selectedClothingArrs.map(course => { 
        //                     return `
        //                     <div class="product">
        //                         <a href="#">
        //                             <div class="condition">${course.condition}</div>
        //                             <div  class="img-item">
        //                                 <img src="${course.image.imgSub0}" alt="">
        //                             </div>
        //                             <div class="mt_10">
        //                                 <div class="name">${course.name}</div>
        //                                 <div class="color">${course.color}</div>
        //                                 <div class="price">${course.price}$</div>
        //                             </div>
        //                         </a>
        //                     </div>
        //                     `;
        //                 })
        //                 filterProducts.innerHTML = htmlss.join('');
        //             } 
        //         };
        //         if (clothingValue == "") {
        //             products.style.display = "flex"
        //         }
        //     });
        // });  
    //sort prices in order
    // function sortPrices() {
    //     prices.addEventListener('change', ()=> {
    //         const pricesValue = prices.value;
    //             if (pricesValue == 'lowtohigh') {
    //                 courses.sort((a, b) =>  
    //                     a.price - b.price
    //                 ) 
    //                 const htmls = courses.map(course => { 
    //                     return `
    //                     <div class="product">
    //                         <a href="#">
    //                             <div class="condition">${course.condition}</div>
    //                             <div  class="img-item">
    //                                 <img src="${course.image.imgSub0}" alt="">
    //                             </div>
    //                             <div class="mt_10">
    //                                 <div class="name">${course.name}</div>
    //                                 <div class="color">${course.color}</div>
    //                                 <div class="price">${course.price}$</div>
    //                             </div>
    //                         </a>
    //                     </div>
    //                     `;
    //                 })
    //                 products.innerHTML = htmls.join('');
    //             }
    //             if (pricesValue == 'hightolow') {
    //                 courses.sort((a, b) =>  
    //                     b.price - a.price
    //                 ) 
    //                 const htmls = courses.map(course => { 
    //     return `
    //     <div class="product">
    //         <a href="#">
    //             <div class="condition">${course.condition}</div>
    //             <div  class="img-item">
    //                 <img src="${course.image.imgSub0}" alt="">
    //             </div>
    //             <div class="mt_10">
    //                 <div class="name">${course.name}</div>
    //                 <div class="color">${course.color}</div>
    //                 <div class="price">${course.price}$</div>
    //             </div>
    //         </a>
    //     </div>
    //     `;
    // })
    // products.innerHTML = htmls.join('');
    //             }
    //             if (pricesValue == "") {
    //                 const htmls = courses.map(course => { 
    //     return `
    //     <div class="product">
    //         <a href="#">
    //             <div class="condition">${course.condition}</div>
    //             <div  class="img-item">
    //                 <img src="${course.image.imgSub0}" alt="">
    //             </div>
    //             <div class="mt_10">
    //                 <div class="name">${course.name}</div>
    //                 <div class="color">${course.color}</div>
    //                 <div class="price">${course.price}$</div>
    //             </div>
    //         </a>
    //     </div>
    //     `;
    // })
    // products.innerHTML = htmls.join('');
    //             }
    //         }
    //     )
    // }
    // sortPrices();

}
// lấy thông tin để lọc sản phẩm
function getInfoFilter() {
    var formInputs = {
        clothing: '',
        price: '',
        size: '',
        gender: '',
        color: '',
    }
    if (inputForm) {
        const selectedProducts = inputForm.querySelectorAll('[name]');
        for (const selectedProduct of selectedProducts) {
            formInputs = selectedProduct.value
            selectedProduct.addEventListener('change', ()=> {
            })
        }
    }
}
getInfoFilter();
function showId(a) {
    console.log(a);
  }
