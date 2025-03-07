document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.getElementById("menu-toggler");
    const menuBar = document.getElementById("menubar");
    const menuBackdrop = document.getElementById("menubar-backdrop");
    const closeMenuElements = document.querySelectorAll("#menubar-backdrop, .close-mobile-menu");
    const dropdownLinks = document.querySelectorAll("#menubar .dropdown .nav-link");
    const searchButton = document.querySelector(".open-mobile-search");
    const searchForm = document.querySelector("header form");
    const closeSearchButton = document.querySelector(".close-mobile-search");

    if (menuToggler && menuBar) {
        menuToggler.addEventListener("click", function (event) {
            event.preventDefault();
            document.body.classList.toggle("mobile-menu-show");
        });
    }

    closeMenuElements.forEach(element => {
        element.addEventListener("click", function () {
            document.body.classList.remove("mobile-menu-show");
        });
    });

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (window.innerWidth <= 991) { // Only apply for mobile screens
                event.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle("active");
            }
        });
    });

    if (searchButton && searchForm) {
        searchButton.addEventListener("click", function (event) {
            event.preventDefault();
            searchForm.classList.add("active");
            searchForm.querySelector("input").focus();
        });
    }

    if (closeSearchButton && searchForm) {
        closeSearchButton.addEventListener("click", function (event) {
            event.preventDefault();
            searchForm.classList.remove("active");
        });
    }
});