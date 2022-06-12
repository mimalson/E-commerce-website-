// side navbar
const navShowBtn = document.querySelector('.navbar-show-btn');
const navHideBtn = document.querySelector('.navbar-hide-btn');
const sideNavbar = document.getElementById('side-navbar');
navShowBtn.addEventListener('click', () => {
    sideNavbar.classList.add('side-navbar-show');
});

navHideBtn.addEventListener('click', () => {
    sideNavbar.classList.remove('side-navbar-show');
});

// category
const categoryItems = document.getElementById('category-list-items');
const categoryTogglerBtn = document.querySelector('.category-toggler-btn');
categoryTogglerBtn.addEventListener('click', () => {
    categoryItems.classList.toggle('show-category-items');

    if(categoryItems.classList.contains('show-category-items')){
        categoryTogglerBtn.querySelector('i').className = "fas fa-circle-arrow-up";
    } else{
        categoryTogglerBtn.querySelector('i').className = "fas fa-circle-arrow-down";
    }
})
