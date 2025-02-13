// Add interactivity if needed.
// Example: Smooth scroll to sections when links are clicked.

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


// Select the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
