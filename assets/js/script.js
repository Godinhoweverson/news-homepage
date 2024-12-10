const iconMenu = document.getElementById('icon-menu');
const navigationMenu = document.getElementById('navigation-menu');

iconMenu.addEventListener('click', ()=>{
 const mobileNav = document.querySelector('.mobile-nav');
 mobileNav.style.display = 'flex';
});

const mobileNavBar = () => {
    const divOP = document.createElement('div');
    divOP.className = 'div-op';
    navigationMenu.appendChild(divOP);
    const div = document.createElement('div');
    div.className = 'mobile-nav'
    
    const closeIcon = document.createElement('div');
    closeIcon.classList = 'close';
    div.appendChild(closeIcon);
    
    const ul = document.createElement('ul');
    ul.classList = 'list';
    
    const home = document.createElement('li');
    home.innerHTML = 'Home';
    ul.appendChild(home)
    
    const newli = document.createElement('li');
    newli.innerHTML = 'New';
    ul.appendChild(newli)
    
    const popular = document.createElement('li');
    popular.innerHTML = 'Popular';
    ul.appendChild(popular)
    
    const trending = document.createElement('li');
    trending.innerHTML = 'Trending';
    ul.appendChild(trending)
    
    const categories = document.createElement('li');
    categories.innerHTML = 'Categories';
    ul.appendChild(categories)
    
    div.appendChild(ul)
    
    navigationMenu.appendChild(div);
}

mobileNavBar();

const closeMobileNavBar = () =>{
    const mobileNav = document.querySelector('.mobile-nav');
    const close = document.querySelector('.close');
    if (close){
        close.addEventListener('click', ()=>{
            console.log('yes')
            mobileNav.style.display = 'none';
        });      
    }
  
}

closeMobileNavBar();