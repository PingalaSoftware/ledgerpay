// Select elements
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu and overlay
menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// Close menu when clicking on the overlay
menuOverlay.addEventListener('click', () => {
    closeMenu();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuItems.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu when clicking on a nav item
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Function to close the menu
function closeMenu() {
    menuItems.classList.remove('open');
    menuOverlay.classList.remove('active');
    menuBtn.classList.remove('open');
}
