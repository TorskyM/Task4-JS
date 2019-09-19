/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import {navigationModal} from '../modules/modal.js';

const anchor = document.querySelectorAll('a[href^="#"]');
const navigation = document.querySelector('#navigation');
const className = 'header-position';

const anchorTrigger = (function() {
  return {
    init: () => {
      anchor.forEach((el) => {
        el.onclick = function(event) {
          event.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        };
      });

      window.onscroll = function() {
        navigationModal.removeModal(navigation, className);
      };
    },
  };
}());

export default anchorTrigger;
