const throttle = require('lodash.throttle')

document.addEventListener("DOMContentLoaded", function(){

const   right_div = document.querySelectorAll('.js-right-anim'),
        top_div = document.querySelectorAll('.js-top-anim'),
        left_div = document.querySelectorAll('.js-left-anim'),
        appear_div = document.querySelectorAll('.js-appear-anim');

let startOffset = window.pageYOffset;

function animateMe(elementsArray, direction, interval) {
    Array.prototype.forEach.call(elementsArray, function (el, index) {
        let animation = setTimeout(function () {
            let elementOffsetPosition = elementsArray[index].offsetTop;
            if(startOffset >= elementOffsetPosition-800 && direction === 'top'){
                elementsArray[index].classList.add('animation-top');
            }
            if(startOffset >= elementOffsetPosition-800 && direction === 'left'){
                elementsArray[index].classList.add('animation-left');
            }
            if(startOffset >= elementOffsetPosition-800 && direction === 'right'){
                elementsArray[index].classList.add('animation-right');
            }
            if(startOffset >= elementOffsetPosition-800 && direction === 'appear'){
                elementsArray[index].classList.add('animation-appear');
            }
            clearTimeout(animation);
        }, index * interval);
    });
}

animateMe(top_div, 'top', 200);
animateMe(appear_div, 'appear', 200);
animateMe(right_div, 'right', 200);
animateMe(left_div, 'left', 200);

window.addEventListener('scroll', throttle(animation,150));
    function animation (e){
        startOffset = window.pageYOffset;
        animateMe(top_div, 'top', 200);
        animateMe(appear_div, 'appear', 200);
        animateMe(right_div, 'right', 200);
        animateMe(left_div, 'left', 200);
    }
});
