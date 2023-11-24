const headerNav = document.querySelector('.header__nav');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuList = document.querySelector('.menu__list');

// const toggleMenu = () => headerNav.classList.toggle('active');

// menuBtnOpen.addEventListener('click', toggleMenu);
// menuBtnClose.addEventListener('click', toggleMenu);

function onMenuLinkClick(e) {
    
    if (menuBtnOpen.classList.contains('visually-hidden')) {
        document.body.classList.remove('lock');
        menuList.classList.remove('active');
        menuBtnOpen.classList.remove('active');
        menuBtnClose.classList.add('visually-hidden');
    }
    window.scrollTo( {
        behavior: 'smooth'
    });
}

if (menuBtnOpen) {    
    menuBtnOpen.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        menuList.classList.toggle('active');
        menuBtnOpen.classList.toggle('visually-hidden'); 
        menuBtnClose.classList.toggle('visually-hidden');        
    })
}

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
})
