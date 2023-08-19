let hamburgerIcon = document.getElementById('hamburger');
let hamburgerMenu = document.getElementById('menu');
let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-icon');
let isMenuOpen = false;

function openMenu(){
    if(!isMenuOpen){
        hamburgerMenu.style.transform = 'translateX(0)';
        hamburgerIcon.style.transform = 'translateX(-200%)';
        menuIcon.style.transform = 'rotate(-90deg)';
        menuIcon.style.opacity = '0';
        closeIcon.style.transform = 'rotate(0deg)';
        closeIcon.style.opacity = '1';
        isMenuOpen = true; 
    } else {
        hamburgerMenu.style.transform = 'translateX(100%)';
        hamburgerIcon.style.transform = 'translateX(0)';
        menuIcon.style.transform = 'rotate(0deg)';
        menuIcon.style.opacity = '1';
        closeIcon.style.transform = 'rotate(90deg)';
        closeIcon.style.opacity = '0';
        isMenuOpen = false; 
    }
}