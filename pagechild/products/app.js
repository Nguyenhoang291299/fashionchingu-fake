const products = document.querySelector('.products');
// const condition = document.querySelector('.condition');
// const img = document.querySelector('.img');
// const name = document.querySelector('.name');
// const price = document.querySelector('.price');

const courseApi = 'http://localhost:3000/products';


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
        // if (course.condition == "") {
        //     return course.condition = undefined
        // } else {
            
        // }
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
}