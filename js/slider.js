/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const mainBlock = [...document.querySelectorAll('.quote')];
const buttonPrev = [...document.querySelectorAll('.prev')];
const buttonNext = [...document.querySelectorAll('.next')];
const mainBlocksLeng = mainBlock.length;
const leftSlide = 0;
const centerSlide = 1;
const rightSlide = 2;

const slider = (function() {
  return {
    init: () => {
      let count = 1;

      const moveRight = () => {
        const selectedSection = event.target.parentNode.children[1];
        const slides = [...selectedSection.children];
        const slidesNumber = slides.length;

        for (let i = 0; i < slidesNumber; i++) {
          if (count === 0) {
            slides[i].classList.remove('slider-animation-right');
          } else if (count === 1) {
            slides[i].classList.add('slider-animation-left');
          } else if (count === 2) {
            slides[i].classList.remove('slider-animation-left');
            slides[i].classList.add('slider-animation-right');
          }
        }

        switch (count) {
          case centerSlide:
          case leftSlide:
            count += 1;
            break;
          case rightSlide:
            count = 0;
        }
      };

      const moveLeft = () => {
        const selectedSection = event.target.parentNode.children[1];
        const slides = [...selectedSection.children];
        const slidesNumber = slides.length;

        for (let j = 0; j < slidesNumber; j++) {
          if (count === 0) {
            slides[j].classList.remove('slider-animation-right');
            slides[j].classList.add('slider-animation-left');
          } else if (count === 1) {
            slides[j].classList.add('slider-animation-right');
          } else if (count === 2) {
            slides[j].classList.remove('slider-animation-left');
          }
        }

        switch (count) {
          case centerSlide:
          case rightSlide:
            count -= 1;
            break;
          case leftSlide:
            count = 2;
        }
      };

      for (let i = 0; i < mainBlocksLeng; i++) {
        buttonPrev[i].addEventListener('click', moveLeft);
        buttonNext[i].addEventListener('click', moveRight);
      }
    },
  };
}());

export default slider;
