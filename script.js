let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let iconTop = document.querySelector('.footer-iconTop a'); /* Diubah untuk menarget wrapper-nya langsung */

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-bars-staggered');
    navbar.classList.toggle('active');
}

let lastScrollY = window.scrollY;

window.onscroll = () => {
    menu.classList.remove('fa-bars-staggered');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');

    // Tampilkan tombol "back to top" kalau sudah scroll lebih dari 150px
    if (window.scrollY > 150) {
        iconTop.classList.add('show');
    } else {
        iconTop.classList.remove('show');
    }

    // Update last scroll position (bila masih diperlukan untuk keperluan lain)
    lastScrollY = window.scrollY;
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content, .layanan-container, .dokter-container, .galeri-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
ScrollReveal().reveal('.contact-form', { origin: 'right' });
ScrollReveal().reveal('.contact-info', { origin: 'left' });