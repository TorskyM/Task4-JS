/* eslint-disable no-undef */

const navigationModal = (function() {
  return {
    removeModal: (navigation, className) => {
      window.pageYOffset === 0 ?
      navigation.classList.add(className) :
      navigation.classList.remove(className);
    },
  };
}());

export {navigationModal};
