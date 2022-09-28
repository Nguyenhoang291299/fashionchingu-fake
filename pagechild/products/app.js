const product = document.querySelector('.products');
// const condition = document.querySelector('.condition');
// const img = document.querySelector('.img');
// const name = document.querySelector('.name');
// const price = document.querySelector('.price');

const courseApi = 'https://6331c310cff0e7bf70f605da.mockapi.io/api/products';


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
        <div>
            <div class="condition">${course.condition}</div>
            <img src="" alt="" class="img">
            <div class="name">${course.name}</div>
            <div class="price">${course.price}$</div>
        </div>
        `;
    })
    product.innerHTML = htmls.join('');
}