const navigationMenu = document.querySelector('.navigation-menu');
const navBar = document.querySelector('nav');
const logoW = document.querySelector('.logo-w');
const navDesktop = document.querySelector('.nav-desktop');

const width = window.innerWidth;
let open;
if(width < 1024){

  navigationMenu.addEventListener('click', () =>{
    navBar.style.gridTemplateRows = '1788px';
    navigationMenu.style.display = 'flex';
    navigationMenu.style.flexDirection = 'column';
    navigationMenu.style.justifyContent = 'flex-start';
    navigationMenu.style.alignContent = 'flex-start';
    navigationMenu.style.backgroundColor = 'hsl(36, 100%, 99%)';
    navigationMenu.style.backgroundImage = 'none';
    navigationMenu.style.backgroundImage = "url('/assets/images/icon-menu-close.svg')";
    navigationMenu.style.backgroundPosition = 'right top';
    logoW.style.backgroundColor ='rgba(0, 0, 0, 0.5)';
    navDesktop.style.display = 'flex';
    open = true
  });
  console.log(open)
  if(open){
    navigationMenu.addEventListener('click', () =>{
      logoW.style.backgroundColor ='';
      navBar.style.gridTemplateRows = '100%';
      navigationMenu.style.backgroundImage = "url('/assets/images/icon-menu.svg')";
      navDesktop.style.display = 'none';
    })
  }

  
}





