const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-container-menu');

//Display mobile function 

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);