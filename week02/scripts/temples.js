const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".nav-list");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuButton.classList.toggle("open");
});
