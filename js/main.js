import { getWeather, getCrypto } from "./api.js";
import { saveFavorite, renderFavorites } from "./favorites.js";
import { renderCryptoChart } from "./charts.js";

const weatherEl = document.getElementById("weather-data");
const cryptoEl = document.getElementById("crypto-data");
const btn = document.getElementById("search-btn");
const saveBtn = document.getElementById("save-favorite");

let currentCity = "";

// Search Weather
btn.addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;
  if (!city) return;
  currentCity = city;
  weatherEl.textContent = "Loading...";

  try {
    const data = await getWeather(city);
    weatherEl.textContent = `${data.name}: ${data.main.temp}°C`;
  } catch {
    weatherEl.textContent = "Error fetching data";
  }
});

// Save Favorite
saveBtn.addEventListener("click", () => {
  if (currentCity) saveFavorite(currentCity);
});

// Load Favorites
renderFavorites();

// Load Crypto Price
(async function loadCrypto() {
  const data = await getCrypto();
  cryptoEl.textContent = `$${data.bitcoin.usd}`;
})();

// Render Chart
renderCryptoChart();
