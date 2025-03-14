document.addEventListener("DOMContentLoaded", function() {
    function fadeInOnScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');

        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Sticky Navbar Effect on Scroll
    function navbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Trigger functions on scroll
    window.addEventListener('scroll', () => {
        fadeInOnScroll();
        navbarScrollEffect();
    });

    // Initial trigger in case elements are already in view
    fadeInOnScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    function fadeInOnScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');

        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Trigger function on scroll
    window.addEventListener('scroll', fadeInOnScroll);

    // Initial trigger in case elements are already in view
    fadeInOnScroll();
});
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "person.html"; // Redirect to static profile page
});
