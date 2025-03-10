const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
