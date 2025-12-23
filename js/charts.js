export async function renderCryptoChart() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
  );
  const data = await res.json();

  const prices = data.prices.map(p => p[1]);
  const labels = data.prices.map((_, i) => `Day ${i + 1}`);

  const ctx = document.getElementById("cryptoChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Bitcoin Price (USD)",
        data: prices,
        borderColor: "#4f46e5",
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: getComputedStyle(document.body).color }
        }
      }
    }
  });
}
