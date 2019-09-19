/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const image = [...document.querySelectorAll('.example-hover')];
const modalImage = [...document.querySelectorAll('.example-picture')];
const gallery = document.querySelector('.gallery-bg');
const contentImage = document.querySelector('.gallery-bg-content');

const galleryAnimation = (function() {
  return {
    init: () => {
      image.forEach((el, i) => image[i].onclick = function() {
        contentImage.classList.add('restriction');
        gallery.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        contentImage.src = modalImage[i].src;
      });

      gallery.onclick = function() {
        gallery.style.display = 'none';
        document.body.style.overflow = 'visible';
        contentImage.classList.remove('restriction');
      };
    },
  };
}());

export default galleryAnimation;
