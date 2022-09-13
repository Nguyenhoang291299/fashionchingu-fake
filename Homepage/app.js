const openMenu = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x-lg');
const bgSidebar = document.querySelector('.bg-sidebar');
const submenuRes = document.querySelectorAll('.sub-menu-items b');
const subChilds = document.querySelectorAll('.sub-menu-items ul');
const btnSearch = document.querySelector('.bi-search');
const closeSearch = document.querySelector('.sf-close');
const headerSearch = document.querySelector('.header_search');
// responsive menu side bar
openMenu.onclick = function () {
    bgSidebar.style.display = "block";
} 
closeMenu.onclick = function () {
    bgSidebar.style.display = "none";
}
// OC search
closeSearch.onclick = function () {
    headerSearch.style.display = "none";
}
btnSearch.onclick = function () {
    headerSearch.style.display = "block";
}
// handle slide slider-syncing

$('.slide-content').slick({
    slidesToShow: 4,
    arrows: true,
    responsive: [{
        breakpoint: 1024,
        setting: {
            slidesToShow: 3,
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }
    }]
  });
