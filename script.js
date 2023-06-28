const menuOpen = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const subMenu = document.querySelector(".list-item");
const subMenu2 = document.querySelector(".list-item2");
const navBar2 = document.querySelector(".sub-menu");
const navBar3 = document.querySelector(".company");
const navBar = document.querySelector(".menu");



menuOpen.addEventListener("click", () => {
  navBar.classList.remove("hidden");
})

closeMenu.addEventListener("click", () => {
  navBar.classList.add("hidden");
})

subMenu.addEventListener("click", () => {
    subMenu.classList.toggle("active");
})

subMenu2.addEventListener("click", () => {
    subMenu2.classList.toggle("active");
})