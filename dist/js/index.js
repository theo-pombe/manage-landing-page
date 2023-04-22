"use strict";
const humbergerMenu = document.getElementById("humberger-menu");
const navbarMenu = document.getElementById("navbar-menu");
humbergerMenu.addEventListener("click", () => {
    humbergerMenu.classList.toggle("is-open");
    navbarMenu.classList.toggle("hidden");
});
//# sourceMappingURL=index.js.map