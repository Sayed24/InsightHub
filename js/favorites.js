const list = document.getElementById("favorites-list");

export function saveFavorite(city) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(city)) {
    favorites.push(city);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
}

export function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  list.innerHTML = "";

  favorites.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.tabIndex = 0;
    list.appendChild(li);
  });
}

