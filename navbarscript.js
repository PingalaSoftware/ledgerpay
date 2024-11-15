const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

// Toggle navbar on button click with smooth behavior
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
    navbarCollapse.style.transition = 'transform 1s ease'; // Adjust slide timing
});

// Close navbar when clicking outside of it or inside it
document.addEventListener('click', (event) => {
    const isClickInsideNavbar =
        navbarCollapse.contains(event.target) ||
        navbarToggler.contains(event.target);
    if (!isClickInsideNavbar) {
        navbarCollapse.classList.remove('show');
    }
});

// Close navbar when a menu item is clicked
navbarCollapse.addEventListener('click', () => {
    navbarCollapse.classList.remove('show');
});
