/* =========================
   MAIN APPLICATION LOGIC
   ========================= */

import { getWeather, getCryptoPrice } from "./api.js";
import { saveFavorite, renderFavorites } from "./favorites.js";
import { renderCryptoChart } from "./charts.js";

/* DOM ELEMENTS */
const weatherOutput = document.getElementById("weather-data");
const cryptoOutput = document.getElementById("crypto-data");
const searchBtn = document.getElementById("search-btn");
const saveBtn = document.getElementById("save-favorite");
const cityInput = document.getElementById("city-input");

let currentCity = "";

/* =========================
   WEATHER SEARCH
   ========================= */

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return;

  currentCity = city;
  weatherOutput.textContent = "Loading...";

  try {
    const data = await getWeather(city);
    weatherOutput.textContent = `${data.name}: ${data.main.temp}°C • ${data.weather[0].description}`;
  } catch (error) {
    weatherOutput.textContent = "Unable to fetch weather data.";
  }
});

/* =========================
   SAVE FAVORITE
   ========================= */

saveBtn.addEventListener("click", () => {
  if (currentCity) {
    saveFavorite(currentCity);
  }
});

/* =========================
   INITIAL LOAD
   ========================= */

// Load favorites from storage
renderFavorites();

// Load crypto price
(async function loadCrypto() {
  try {
    const data = await getCryptoPrice();
    cryptoOutput.textContent = `$${data.bitcoin.usd}`;
  } catch {
    cryptoOutput.textContent = "Crypto data unavailable";
  }
})();

// Render chart
renderCryptoChart();
