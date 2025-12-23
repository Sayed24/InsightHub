const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;

toggleBtn.addEventListener("click", () => {
  const current = root.dataset.theme;
  const newTheme = current === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});

