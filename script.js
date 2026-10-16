//FOR menu clicking function in mobile devices

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('myNavbar');

    if (navToggle && navbar) {
        navToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            if (navbar.classList.contains('active')) {
                navToggle.textContent = '✕';
            } else {
                navToggle.textContent = '☰ MENU';
            }
        });
    }
});

//For stopping mobile device to hover
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.remove('is-mobile');
    }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);

