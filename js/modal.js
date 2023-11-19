const backdrop = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.btn');
const modalBtnClose = document.querySelector('.close');

const toggleModal = () => backdrop.classList.toggle('visually-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
