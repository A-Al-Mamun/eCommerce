
// Nav Bar
const cat = () => {
    var barMenu = document.getElementsByClassName('bar-menu')[0];

    if(barMenu.style.display == 'block'){
        barMenu.style.display = 'none';
    }
    else{
        barMenu.style.display = 'block';
        barMenu.style.zIndex = '10';
    }
}

let barMenuElements = document.querySelectorAll('.bar-menu li');

let innerMenu = document.querySelectorAll('.inner-bar-menu');

// let barMenuIndex = 0;
for(let i = 0; i < barMenuElements.length; i++){
    barMenuElements[i].addEventListener('click', () => {
        innerMenu[i].classList.toggle('active');
        innerMenu[i].display.zIndex = '999';
    });
}

// console.log(barMenuElements[1].innerText);
// console.log(innerMenu[0].innerText);
// console.log(innerMenu);



// Scroll Hover Section Start

let scrollHover = document.getElementsByClassName('scroll-hover')[0];
let closeHover = document.getElementsByClassName('hover-close')[0];
let body = document.body;

function scrollBody(){
    scrollHover.style.display = 'flex'

    closeHover.addEventListener('click', () => {
        scrollHover.style.display = 'none'
    })
}
// console.log(body)
// body.addEventListener('scroll', () => {
//     scrollHover.style.display = 'block';
// })



// Slide Section 

let slidePre = document.getElementsByClassName('slide-pre')[0];
let slideNext = document.getElementsByClassName('slide-next')[0];

let slider = document.getElementsByClassName('slider')[0];
let sliderItem = document.querySelectorAll('.slider-item'); 


let sliderInfo = document.getElementsByClassName('slider-info')[0];
let sliderInfoItem = document.querySelectorAll('.slider-info-item');

var slideIndex = 0;
sliderItem[slideIndex].classList.add('active');
sliderInfoItem[slideIndex].classList.add('active');

slidePre.addEventListener('click', () => {
    sliderItem[slideIndex].classList.remove('active');

    sliderInfoItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == 0) ? sliderItem.length - 1 : slideIndex - 1;
    sliderItem[slideIndex].classList.add('active');

    sliderInfoItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

})

slideNext.addEventListener('click', () => {
    sliderItem[slideIndex].classList.remove('active');

    sliderInfoItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == sliderItem.length - 1) ? 0 : slideIndex + 1;
    sliderItem[slideIndex].classList.add('active');

    sliderInfoItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
})





