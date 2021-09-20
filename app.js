const hamburgerBtn = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav_list');
const body = document.querySelector('body');
const navSection = document.querySelector('.nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navList.classList.toggle('open');
    body.classList.toggle('locked');
});