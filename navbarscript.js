// Select elements
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuOverlay = document.querySelector('.menu-overlay');

// Toggle menu and overlay
menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// Close menu when clicking on the overlay
menuOverlay.addEventListener('click', () => {
    menuItems.classList.remove('open');
    menuOverlay.classList.remove('active');
    menuBtn.classList.remove('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuItems.contains(e.target) && !menuBtn.contains(e.target)) {
        menuItems.classList.remove('open');
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('open');
    }
});
