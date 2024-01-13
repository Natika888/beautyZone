const images = ['maskFace.jpg', 'needleFace.jpg', 'spatulaFace.jpg'];

let activeImage = 0;
const sliderPlace = document.querySelector('.slider-line');
let flag = true;

const initSlider = () => {
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[activeImage];
    console.log(images[activeImage]);
    sliderPlace.append(img);
};
initSlider();
