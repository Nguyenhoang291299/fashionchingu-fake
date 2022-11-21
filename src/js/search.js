const btnSearch = document.querySelector('.bi-search');
const closeSearch = document.querySelector('.sf-close');
const headerSearch = document.querySelector('.header_search');
const charactersList = document.querySelector('#charactersList');
const searchBar = document.querySelector('#searchBar');
// OC search
closeSearch.onclick = function () {
    headerSearch.style.display = "none";
}
btnSearch.onclick = function () {
    headerSearch.style.display = "block";
}

// handle search
const arrSearch = []

function handleSearch(courses) {
    courses.map((course) => { 
        searchBar.addEventListener("change", (e) => {
            e.preventDefault
            const value = e.target.value
            if(course.name.toLowerCase().includes(value)) {
                arrSearch.push(course)
                const htmls = arrSearch.map(element => {
                    return `
                    <li>
                        <a href="http://" class="character hire">
                            <img src="${element.image.imgSub0}"></img>
                            <h2>${element.name}</h2>
                            <p>$${element.price}</p>
                        </a>
                    </li>`
                })
                charactersList.innerHTML = htmls.join('')
            }  
        })
    }); 
}
