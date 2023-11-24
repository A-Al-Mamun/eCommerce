
// Nav Bar
const cat = () => {
    var barMenu = document.getElementsByClassName('bar-menu')[0];

    if(barMenu.style.display == 'block'){
        barMenu.style.display = 'none';
    }
    else{
        barMenu.style.display = 'block';
    }
}



// Slide Section 

let slidePre = document.getElementsByClassName('slide-pre')[0];
let slideNext = document.getElementsByClassName('slide-next')[0];

let slider = document.getElementsByClassName('slider')[0];
let sliderItem = document.querySelectorAll('.slider-item');


let sliderInfo = document.getElementsByClassName('slider-info')[0];
let sliderInfoItem = document.querySelectorAll('.slider-info-item');

let slideIndex = 0;
sliderItem[slideIndex].classList.add('active');
sliderInfoItem[slideIndex].classList.add('active');

slidePre.addEventListener('click', () => {
    sliderItem[slideIndex].classList.remove('active');

    sliderInfoItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == 0) ? sliderItem.length - 1 : slideIndex - 1;
    sliderItem[slideIndex].classList.add('active');

    sliderInfoItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    sliderInfo.style.transform = `translateX(-${slideIndex * 100}%)`;

})

slideNext.addEventListener('click', () => {
    sliderItem[slideIndex].classList.remove('active');

    sliderInfoItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == sliderItem.length - 1) ? 0 : slideIndex + 1;
    sliderItem[slideIndex].classList.add('active');

    sliderInfoItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    sliderInfo.style.transform = `translateX(-${slideIndex * 100}%)`;
})
