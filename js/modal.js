const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.btn');
const modalBtnClose = document.querySelector('.close');
const body = document.querySelector('body');

let fixBlocks = document.querySelectorAll('.fix-block');


const openModal = () => {
    let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
    body.classList.add('lock');
    backdrop.classList.remove('visually-hidden');
    fixBlocks.forEach((el)=> {
        el.style.paddingRight = paddingOffSet;        
    })    
}

const closeModal = () => {
    body.classList.remove('lock');
    backdrop.classList.add('visually-hidden');
    fixBlocks.forEach((el)=> {
        el.style.paddingRight = 0;
    })
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
// findFormBtn.addEventListener('click',(e) => {
//     e.preventDefault();
// } );