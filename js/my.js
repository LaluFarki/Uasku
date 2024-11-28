alert('selamat datang Di Mafia Esteh')

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

document.addEventListener("DOMContentLoaded", function () {
  // Periksa jika ini adalah halaman 3
  if (window.location.href.includes("promo")) {
    const popup = document.getElementById("popup");
    // Aktifkan animasi
    popup.style.opacity = "1";
    popup.style.transform = "scale(1)";
  }
});
