const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

// Toggle navbar on button click with smooth behavior
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
    navbarCollapse.style.transition = 'transform 0.300s ease'; // Smooth transition
});

// Close navbar when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNavbar =
        navbarCollapse.contains(event.target) ||
        navbarToggler.contains(event.target);
    if (!isClickInsideNavbar) {
        navbarCollapse.classList.remove('show');
    }
});
