const sliderImages = document.querySelectorAll('.procedures__card'),
    sliderLine = document.querySelector('.procedures__cards'),
    sliderDots = document.querySelectorAll('.carusel-dot'),
    sliderBtnNext = document.querySelector('.carusel-next'),
    sliderBtnPrev = document.querySelector('.carusel-prev');

let sliderCount = 0,
    
    arrayLength = sliderImages.length - 1,
    sliderWidth;

window.onload = e => {
    for (i = 0; i < sliderImages.length; i++) {
        sliderImages[i].setAttribute('index', i);
    }
};

function nextSlide() {
    sliderImages.forEach(item => {
        let index = item.getAttribute('index') - 1;

        if (index < 0) {
            item.setAttribute('index', sliderImages.length - 1);
        } else {
            item.setAttribute('index', index);
        }
    });

    rollSlider();
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    rollSlider();
}

function rollSlider() {
    sliderImages.forEach(item => {
        let indexX = item.getAttribute('index');

        // if (indexX !== arrayLength) {
        //     item.style.transform = `translateX(-336px)`;
        // } else {
        //     item.style.transform = `translateX(672px)`;
        // }

        // if (indexX == arrayLength) {
        //     item.style.transform = `translateX(672px)`;
        // } else {
        //     item.style.transform = `translateX(-336px)`;
        // }
        if (indexX == 0) {
            item.classList.add('first');
        }
        if (indexX == 1) {
            item.classList.add('second');
        }
        if (indexX == 2) {
            item.classList.add('third');
        }
    });
}

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
