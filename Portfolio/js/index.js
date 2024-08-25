const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
    }
};

// Add event listener to the menu icon
document.querySelector('#menu-icon')?.addEventListener('click', toggleNavbar);
