import { getWeather, getCrypto } from "./api.js";

const weatherEl = document.getElementById("weather-data");
const cryptoEl = document.getElementById("crypto-data");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;
  weatherEl.textContent = "Loading...";

  try {
    const data = await getWeather(city);
    weatherEl.textContent = `${data.name}: ${data.main.temp}°C`;
  } catch {
    weatherEl.textContent = "Error fetching data";
  }
});

(async function loadCrypto() {
  const data = await getCrypto();
  cryptoEl.textContent = `$${data.bitcoin.usd}`;
})();

