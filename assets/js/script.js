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

// Search form redirection
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "person.html"; // Redirect to static profile page
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const icon = document.querySelector(".navbar-icons i"); 

    if (window.scrollY > 100) {
        navbar.classList.add("scrolled", "navbar-light");
        navbar.classList.remove("bg-primary", "navbar-dark");

        if (icon) {  
            icon.classList.add("navbar-ico");
            icon.classList.remove("navbar-icons");
        }
    } else {
        navbar.classList.remove("scrolled", "navbar-light");
        navbar.classList.add("navbar-dark", "bg-primary");

        if (icon) {
            icon.classList.remove("navbar-ico");
            icon.classList.add("navbar-icons");
        }
    }
});
