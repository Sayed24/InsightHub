/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

// Toggle menu open / close
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close menu when a link is clicked (mobile UX)
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
