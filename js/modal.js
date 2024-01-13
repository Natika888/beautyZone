const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.btn');
const modalBtnClose = document.querySelector('.close');
const body = document.querySelector('body');


const toggleModal = () => {
backdrop.classList.toggle('visually-hidden');
body.classList.toggle('lock');
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(modal);
    const click2 = e.composedPath().includes(modalBtnOpen);
    
    if (!click && !click2) {
        toggleModal();
    } else {
        return;
    }
});
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

