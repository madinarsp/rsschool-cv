const hamburgerBtn = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav_list');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navList.classList.toggle('open');
    body.classList.toggle('locked');
});

navItems.forEach(item => addEventListener('click', (event) => {
    if(!event.target.classList.contains('hamburger-menu')) {
        hamburgerBtn.classList.toggle('open');
        navList.classList.toggle('open');
        body.classList.toggle('locked');
    }
}));