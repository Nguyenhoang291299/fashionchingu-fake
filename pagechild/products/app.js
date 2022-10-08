
const products = document.querySelector('.products');
const prevPage = document.querySelector('.bi-caret-left-fill');
const nextPage = document.querySelector('.bi-caret-right-fill');
const clothing = document.querySelector("#clothing");

// const img = document.querySelector('.img');
// const name = document.querySelector('.name');
// const price = document.querySelector('.price');

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
    
    const htmls = courses.map(course => {   
        return `
        <div class="product">
            <a href="#">
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
    clothing.addEventListener('change', ()=> {
        // clothingValue.value
        const clothingValue = clothing.value
        courses.filter(course => { 
            if(course.type === clothingValue)
            {
                product.classList.add("hire")
            };
        });
    });
}
