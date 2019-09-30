/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const topBlock = [...document.querySelectorAll('.what-we-do-top')];
const collapseBlocks = [...document.querySelectorAll('.what-we-do-collapse')];
const imageRewrite = document.querySelector('.what-we-do-image');
const srcArr = ['./images/Layer_43.png',
  './images/creativity.jpg',
  './images/web-design-tweaks.jpg'];

function checkIndex(event) {
  const hideIndex = topBlock.indexOf(event.target);
  const collapseLeng = collapseBlocks.length;

  for (let i = 0; i < collapseLeng; i++) {
    if (i === hideIndex) {
      collapseBlocks[i].classList.toggle('hide-block');
      imageRewrite.src = srcArr[i];
      imageRewrite.style.height = `${50}vh`;
    } else collapseBlocks[i].classList.add('hide-block');
  }
}

const accordion = (function() {
  return {
    init: () => {
      topBlock.forEach((el) => el.addEventListener('click',
          function() {
            topBlock.forEach(function(check) {
              check.addEventListener('click', checkIndex);
            });
          }));
    },
  };
}());

export default accordion;
