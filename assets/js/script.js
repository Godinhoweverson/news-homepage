const navigationMenu = document.querySelector('.navigation-menu');
const navBar = document.querySelector('nav');

navigationMenu.addEventListener('click', () =>{
  navBar.style.gridTemplateRows = '1788px';
  navigationMenu.style.backgroundColor = 'hsl(36, 100%, 99%)';
  navigationMenu.style.backgroundImage = '';

  navigationMenu.style.backgroundImage.src = 'url(/assets/images/icon-menu-close.svg)';

});