const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  console.log('Hamburger menu clicked!'); // Tambahkan ini untuk debugging
  navbarNav.classList.toggle('active');
};


//  klik diluar side bar utk hilangkan navigasi saat di hamburger
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
})