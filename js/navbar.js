const menuItems = document.querySelectorAll('.classic-menu__item');
const sections = document.getElementsByTagName('section');
const nav = document.querySelector('.header__wrapper')
const menuBtn = document.querySelector('.ham');
function fixedNav() {
  const breakpoint = 50;
  if ( window.scrollY >= breakpoint) {
    nav.classList.add('header_fixed')
  } else {
    nav.classList.remove('header_fixed')
  }
}
window.addEventListener('scroll', fixedNav)

function menuNavigation(){
  const menuItemsList = [...menuItems];
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', ()=> {
      sections[menuItemsList.indexOf(menuItem)].scrollIntoView({'block' : 'center'})
      menuBtn.classList.remove('active');
      document.getElementsByTagName('body')[0].classList.remove('body_hidden')
    })
  })
}
