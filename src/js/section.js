let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('about');
let socialLinks = document.querySelectorAll('.social-links');

function switchToHome(){
    homeSection.classList.add('active');
    aboutSection.classList.remove('active');
    socialLinks.forEach(link => {
        link.classList.remove('social-link-disappear');
        link.classList.add('social-link-appear');
    });
}

function switchToAbout(){
    homeSection.classList.remove('active');
    aboutSection.classList.add('active');
    socialLinks.forEach(link => {
        link.classList.remove('social-link-appear');
        link.classList.remove('social-link-animation');
        link.classList.add('social-link-disappear');
    });
}