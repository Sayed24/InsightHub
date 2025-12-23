const WEATHER_API_KEY = "YOUR_API_KEY";

export async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function getCrypto() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );
  return await res.json();
}

