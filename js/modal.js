const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.btn');
const modalBtnClose = document.querySelector('.close');
const body = document.querySelector('body');
const findFormBtn = document.querySelector('.find__form-btn');


const openModal = () => {
    body.classList.add('lock');
    backdrop.classList.remove('visually-hidden');
}

const closeModal = () => {
    body.classList.remove('lock');
    backdrop.classList.add('visually-hidden');
}

document.addEventListener('click', (e) => {    
    const clickOnModal = e.composedPath().includes(modal);
    const clickOnBtnOpen = e.composedPath().includes(modalBtnOpen);
    const isBodyLocked = body.classList.contains('lock');

    if (!clickOnModal&&!clickOnBtnOpen&&isBodyLocked){        
        closeModal();
    } else {
        return;
    }
});

modalBtnOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);