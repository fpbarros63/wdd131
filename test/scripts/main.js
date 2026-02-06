const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

function setNav(open) {
  nav.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu",
  );
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.contains("open");
  setNav(!isOpen);
});

// Close menu when clicking a link (mobile)
nav.addEventListener("click", (e) => {
  if (e.target.matches("a.nav-link")) setNav(false);
});

// Close menu on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNav(false);
});

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();
