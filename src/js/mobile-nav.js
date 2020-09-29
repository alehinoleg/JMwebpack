const siteNavigationBurger = document.querySelector('.site-navigation__burger');
const mobileNavContainer = document.querySelector('.mobile-nav');
const mobileNavExit = document.querySelector('.mobile-nav__exit');

siteNavigationBurger.onclick = function () {
    mobileNavContainer.classList.add('mobile-nav--active');
}

mobileNavExit.onclick = function () {
    mobileNavContainer.classList.remove('mobile-nav--active');
}