//* Navbar JS *//
const menu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navMenu.classList.toggle("active");
});


navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menu.classList.remove("change");
    }
  });
});
