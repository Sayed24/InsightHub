/* =========================
   API CONFIG
   ========================= */

// 🔑 Replace with your own OpenWeather API key
const WEATHER_API_KEY = "ffa6785971f790f0d310af9923f0de7b";

/* =========================
   WEATHER API
   ========================= */

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/* =========================
   CRYPTO API (CoinGecko)
   ========================= */

export async function getCryptoPrice() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );

  return await response.json();
}
