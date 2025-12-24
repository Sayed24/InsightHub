/* =========================
   THEME TOGGLE LOGIC
   ========================= */

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
  updateIcon(savedTheme);
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  const currentTheme = root.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

// Update button icon
function updateIcon(theme) {
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
