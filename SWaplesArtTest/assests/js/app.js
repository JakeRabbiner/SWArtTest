//!Toggle nav and icons
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// remove class and icons
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
    menuToggleButton.classList.remove('active');
    }
}

document.addEventListener('click', removeActiveLinkClass);


// theme and store slect within local stor

const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');

    //save in local
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    }
    else{
        localStorage.removeItem('darkTheme');
    }
};

themeToggleButton.addEventListener('click', toggleTheme);

// scroll effect
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(.68, -.55, .265, 1.55)'
});

sr.reveal('.main-title', {origin: 'top'});
sr.reveal('.scroll-reveal-left', {origin: 'left'});
sr.reveal('.scroll-reveal-right', {origin: 'right'});
sr.reveal('.tech-stack-item', {interval: 250});
sr.reveal('.section-title, .section-subtitle-container',{
    origin: 'top',
    interval: 250
});

sr.reveal('.portfolio-card', {interval: 500});

sr.reveal('.form-container, .footer', {
    origin: 'top'
});

//email

const fname = document.getElementById('fname')
const email = document.getElementById('email')
const submit = document.getElementsByClassName('contact-form')[0]

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("clicked")
})