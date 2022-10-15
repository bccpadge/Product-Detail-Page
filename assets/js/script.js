'use strict';

// Add Event on Element
const addEventOnElem = function (elem, type, callback){
  if (elem.length > 1){
    for (let i = 0; i < elem.length; i++){
      elem[i].addEventListener(type, callback);
    }
  } else{
    elem.addEventListener(type, callback);
  }
}

// Navbar Toggle
const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNav = function (){
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNav);

// Slider Functionality
const slider = document.querySelector('[data-slider]');
const nextBtn = document.querySelector('[data-next]');
const prevBtn = document.querySelector('[data-prev]');

// Set the slider default position
let sliderPos = 0;

// Set the number of total slider items
const totalSliderItems = 4;

// make the next slude btn workable
const slideToNext = function (){
  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
}

addEventOnElem(nextBtn, 'click',  slideToNext);

// make the previous slude btn workable
const slideToPrev = function (){
  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
}

addEventOnElem(prevBtn, 'click',  slideToPrev);

// Check when slider is end then what should slider btn do
function sliderEnd (){
  if(sliderPos  >= totalSliderItems -1){
    nextBtn.classList.add('disabled');
  } else{
    nextBtn.classList.remove('disabled');
  }

  if(sliderPos <= 0){
    prevBtn.classList.add('disabled');
  } else{
    prevBtn.classList.remove('disabled');
  }
}

sliderEnd();

// Product quantity funtionality
const totalPriceElem = document.querySelector('[ data-total-price]');
const qtyElem = document.querySelector('[data-qty]');
const qtyMinusBtn = document.querySelector('[ data-qty-minus]');
const qtyPlusbtn = document.querySelector('[data-qty-plus]');

// Set the product default quantity
let qty = 1;

//  Set the product default price 
let productPrice = 125;

// Set the initial total price
let totalPrice = 125;

const increaseProductQty = function (){
  qty++;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
}

addEventOnElem(qtyPlusbtn, 'click', increaseProductQty);


const decreaseProductQty = function (){
  if( qty > 1 ) qty--;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
}

addEventOnElem(qtyMinusBtn, 'click', decreaseProductQty);

