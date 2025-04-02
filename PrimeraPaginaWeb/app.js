const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-container-menu');
const navLogo =document.querySelector('#navbar__logo')

//Display mobile function 

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const higlighMenu = () => {
    const elem =document.querySelector('.higlight')
    const homeMenu =document.querySelector('#homa-page')
    const aboutMenu =document.querySelector('#about-page')
    const servicesMenu =document.querySelector('#services-page')

    let scrollPos =window.screenY

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return 
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return

    }

}