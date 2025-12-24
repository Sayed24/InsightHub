/* =========================
   FAVORITES (LOCAL STORAGE)
   ========================= */

const favoritesList = document.getElementById("favorites-list");

/* Get favorites from storage */
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

/* Save favorites to storage */
function setFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

/* Add a city to favorites */
export function saveFavorite(city) {
  if (!city) return;

  const favorites = getFavorites();

  if (!favorites.includes(city)) {
    favorites.push(city);
    setFavorites(favorites);
    renderFavorites();
  }
}

/* Render favorites list */
export function renderFavorites() {
  const favorites = getFavorites();
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<li>No favorites saved yet.</li>";
    return;
  }

  favorites.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.tabIndex = 0;
    favoritesList.appendChild(li);
  });
}
