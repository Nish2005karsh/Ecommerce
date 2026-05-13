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




/**
 * Mobile slide-out panels:
 * - nav.mobile-navigation-menu = hamburger menu (dropdowns)
 * - [data-category-sidebar] = grid “categories” panel (separate from nav)
 * Previously both used data-mobile-menu, so the 2nd button opened the wrong panel.
 */
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileNavPanels = document.querySelectorAll('nav.mobile-navigation-menu');
const categorySidebars = document.querySelectorAll('[data-category-sidebar]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const closeAllMobileMenus = function () {
  for (let i = 0; i < mobileNavPanels.length; i++) {
    if (mobileNavPanels[i]) mobileNavPanels[i].classList.remove('active');
  }
  for (let i = 0; i < categorySidebars.length; i++) {
    if (categorySidebars[i]) categorySidebars[i].classList.remove('active');
  }
  if (overlay) overlay.classList.remove('active');
};

if (mobileMenuOpenBtns.length > 0) {
  for (let i = 0; i < mobileMenuOpenBtns.length; i++) {
    mobileMenuOpenBtns[i].addEventListener('click', function () {
      closeAllMobileMenus();
      if (i === 0) {
        if (mobileNavPanels[0]) mobileNavPanels[0].classList.add('active');
      } else {
        if (categorySidebars[0]) categorySidebars[0].classList.add('active');
        else if (mobileNavPanels[0]) mobileNavPanels[0].classList.add('active');
      }
      if (overlay) overlay.classList.add('active');
    });
  }
}

if (mobileMenuCloseBtns.length > 0) {
  addEventOnElements(mobileMenuCloseBtns, 'click', closeAllMobileMenus);
}

if (overlay) {
  overlay.addEventListener('click', closeAllMobileMenus);
}

// Link taps inside drawers close them (same-page nav, etc.)
const mobileDrawerLinks = document.querySelectorAll(
  'nav.mobile-navigation-menu a, [data-category-sidebar] a'
);
if (mobileDrawerLinks.length > 0) {
  addEventOnElements(mobileDrawerLinks, 'click', function () {
    closeAllMobileMenus();
  });
}

const mobileBottomLinks = document.querySelectorAll('.mobile-bottom-navigation a');
if (mobileBottomLinks.length > 0) {
  addEventOnElements(mobileBottomLinks, 'click', function () {
    closeAllMobileMenus();
  });
}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');

if (accordionBtn.length > 0) {
  for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener('click', function () {
      const nextElem = this.nextElementSibling;
      if (!nextElem || !nextElem.matches('[data-accordion]')) return;

      const isActive = nextElem.classList.contains('active');
      const menuRoot = this.closest('nav.mobile-navigation-menu, [data-category-sidebar]') || document;
      const localBtns = menuRoot.querySelectorAll('[data-accordion-btn]');

      for (let j = 0; j < localBtns.length; j++) {
        const panel = localBtns[j].nextElementSibling;
        if (panel && panel.matches('[data-accordion]')) {
          panel.classList.remove('active');
          localBtns[j].classList.remove('active');
        }
      }

      if (!isActive) {
        nextElem.classList.add('active');
        this.classList.add('active');
      }
    });
  }
}
