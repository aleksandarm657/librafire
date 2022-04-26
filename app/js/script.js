const burger = document.querySelector('.burger');
const phoneNav = document.querySelector('.site-header__nav');

// Burger menu phone
burger.onclick = function(e){
  this.classList.toggle('change');
  phoneNav.classList.toggle('show-menu');
  document.querySelector('html').classList.toggle('u-stop-scroll');
}

