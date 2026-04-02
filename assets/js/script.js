'use strict';

/**
 * Helper to safely add events
 */
const addEventOnElements = function (elements, eventType, callback) {
  if (!elements || elements.length === 0) return;
  for (let i = 0, len = elements.length; i < len; i++) {
    if (elements[i]) {
      elements[i].addEventListener(eventType, callback);
    }
  }
}

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { if (modal) modal.classList.add('closed') }

// modal eventListener
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);




// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
if (toastCloseBtn && notificationToast) {
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });
}




// mobile menu variables
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

if (mobileMenuOpenBtns.length > 0) {
  for (let i = 0; i < mobileMenuOpenBtns.length; i++) {

    // mobile menu function
    const mobileMenuCloseFunc = function () {
      if (mobileMenus[i]) mobileMenus[i].classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    }

    mobileMenuOpenBtns[i].addEventListener('click', function () {
      if (mobileMenus[i]) mobileMenus[i].classList.add('active');
      if (overlay) overlay.classList.add('active');
    });

    if (mobileMenuCloseBtns[i]) {
      mobileMenuCloseBtns[i].addEventListener('click', mobileMenuCloseFunc);
    }
    
    if (overlay) {
      overlay.addEventListener('click', mobileMenuCloseFunc);
    }
  }
}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

if (accordionBtn.length > 0) {
  for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener('click', function () {

      const nextElem = this.nextElementSibling;
      const clickedBtnActive = nextElem && nextElem.classList.contains('active');

      for (let j = 0; j < accordion.length; j++) {
        if (clickedBtnActive) break;
        if (accordion[j] && accordion[j].classList.contains('active')) {
          accordion[j].classList.remove('active');
          if (accordionBtn[j]) accordionBtn[j].classList.remove('active');
        }
      }

      if (nextElem) {
        nextElem.classList.toggle('active');
      }
      this.classList.toggle('active');

    });
  }
}

