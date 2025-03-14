document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents default anchor behavior

        let menu = this.nextElementSibling;
        let icon = this.querySelector('.dropdown-icon');

        // Toggle collapse class
        menu.classList.toggle('show');

        // Toggle arrow icon
        icon.classList.toggle('fa-chevron-right');
        icon.classList.toggle('fa-chevron-down');
    });
});


// document.querySelectorAll('.dropdown-icon').forEach(icon => {
//     icon.parentElement.addEventListener('click', function () {
//         const isOpen = this.querySelector('.dropdown-icon').classList.contains('fa-chevron-right');
//         this.querySelector('.dropdown-icon').classList.toggle('fa-chevron-right', !isOpen);
//         this.querySelector('.dropdown-icon').classList.toggle('fa-chevron-down', isOpen);
//     });
// });