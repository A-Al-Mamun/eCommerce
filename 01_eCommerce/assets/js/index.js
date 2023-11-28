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




// Product

let productLeft = document.getElementsByClassName('pro-left')[0];
let productRight = document.getElementsByClassName('pro-right')[0];

let productItem = document.getElementsByClassName('pro-items')[0];
let productItems = document.querySelectorAll('.pro-item');

let proIndex = 0;

productItems[proIndex].classList.add('active');


productLeft.addEventListener('click', () => {
    productItems[proIndex].classList.remove('active');

    proIndex = (proIndex == 0) ? productItems.length - 1 : proIndex - 1;
    productItems[proIndex].classList.add('active');

    productItem.style.transform = `translateX(-${proIndex * 33}%)`;
})

productRight.addEventListener('click', () => {
    productItems[proIndex].classList.remove('active');

    proIndex = (proIndex == productItems.length -1) ? 0 : proIndex + 1;
    productItems[proIndex].classList.add('active');

    productItem.style.transform = `translateX(-${proIndex * 33}%)`;
})





