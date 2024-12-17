const navIcon = document.querySelector('.navIcon');
const navigationMenu = document.querySelector('.navigation-menu');
const navBar = document.querySelector('nav');
const logoW = document.querySelector('.logo-w');
const navDesktop = document.querySelector('.nav-desktop');

navIcon.addEventListener('click', () =>{
  const openIcon = document.querySelector('.open-icon');
    if(openIcon){
      navBar.style.gridTemplateRows = '1880px';
      navigationMenu.style.display = 'flex';
      navigationMenu.style.flexDirection = ' column-reverse';
      navigationMenu.style.justifyContent = 'flex-end';
      navigationMenu.style.alignContent = 'flex-start';
      navigationMenu.style.backgroundColor = 'hsl(36, 100%, 99%)';
  
      navDesktop.style.display = 'flex';
      
      openIcon.remove();
      const img = document.createElement('img');
        img.setAttribute('class','close-icon');
        img.src = "./assets/images/icon-menu-close.svg";
        navIcon.appendChild(img);
  
      logoW.style.backgroundColor ='rgba(0, 0, 0, 0.5)';
    }else{

      const closeIcon = document.querySelector('.close-icon');
      navBar.style.gridTemplateRows = '100%';
      navDesktop.style.display = 'none';
      closeIcon.remove();
      const img = document.createElement('img');
      img.setAttribute('class','open-icon');
      img.src = "assets/images/icon-menu.svg";
      navIcon.appendChild(img);
      logoW.style.backgroundColor ='';
    }  
});

