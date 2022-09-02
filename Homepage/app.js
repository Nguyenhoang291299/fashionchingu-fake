const openMenu = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x-lg');
const bgSidebar = document.querySelector('.bg-sidebar');
const submenuRes = document.querySelectorAll('.sub-menu-items b');
const subChilds = document.querySelectorAll('.sub-menu-items ul');
const hire = document.querySelector('.hire');
// responsive menu side bar
openMenu.onclick = function () {
    bgSidebar.style.display = "block";
} 
closeMenu.onclick = function () {
    bgSidebar.style.display = "none";
}
// handle slide slider-syncing

$('.slide-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
  });
