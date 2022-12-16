const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');
const burgerClose = document.querySelectorAll('.burgerClose');

var body = document.querySelector(".bodyOn");
burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    body.classList.add("body");
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
        navbar.classList.remove('nav-open');
        body.classList.remove("body");
    })
    
});

