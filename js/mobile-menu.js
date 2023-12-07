const headerNav = document.querySelector('.header__nav');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuList = document.querySelector('.menu__list');

// const toggleMenu = () => headerNav.classList.toggle('active');

function toggleMenu(e) {
    headerNav.classList.toggle('active');
    menuBtnClose.classList.toggle('visually-hidden');
    menuBtnOpen.classList.toggle('visually-hidden');
    document.body.classList.toggle('lock');
}

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

function onMenuLinkClick(e) {
    document.body.classList.remove('lock');
    headerNav.classList.remove('active');
    menuBtnOpen.classList.remove('visually-hidden');
    menuBtnClose.classList.add('visually-hidden');

    window.scrollTo({
        behavior: 'smooth',
    });
}

// if (menuBtnOpen) {
//     menuBtnOpen.addEventListener('click', function (e) {
//         // document.body.classList.toggle('lock');
//         // menuList.classList.toggle('active');
//         // menuBtnOpen.classList.toggle('visually-hidden');
//         // menuBtnClose.classList.remove('visually-hidden');
//     })
// }

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});
