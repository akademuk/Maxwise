const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');
const burgerClose = document.querySelectorAll('.burgerClose');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
        burgerClose.classList.toggle('nav-link-open');
    })
    
});

