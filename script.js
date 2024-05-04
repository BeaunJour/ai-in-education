// Function to show/hide the navigation menu on scroll
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.top = '-50px';
    } else {
        nav.style.top = '0';
    }
};