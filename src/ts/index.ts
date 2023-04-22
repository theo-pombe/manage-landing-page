const humbergerMenu = document.getElementById(
  "humberger-menu"
) as HTMLButtonElement;
const navbarMenu = document.getElementById("navbar-menu") as HTMLUListElement;

humbergerMenu.addEventListener("click", () => {
  humbergerMenu.classList.toggle("is-open");
  navbarMenu.classList.toggle("hidden");
});
