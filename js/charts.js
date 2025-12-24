/* =========================
   CRYPTO CHART (Chart.js)
   ========================= */

export async function renderCryptoChart() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
    );

    const data = await response.json();

    const prices = data.prices.map(item => item[1]);
    const labels = data.prices.map((_, index) => `Day ${index + 1}`);

    const canvas = document.getElementById("cryptoChart");

    new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Bitcoin Price (USD)",
            data: prices,
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79, 70, 229, 0.15)",
            tension: 0.35,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: getComputedStyle(document.body).color
            }
          }
        },
        scales: {
          x: {
            ticks: { color: getComputedStyle(document.body).color }
          },
          y: {
            ticks: { color: getComputedStyle(document.body).color }
          }
        }
      }
    });

  } catch (error) {
    console.error("Chart error:", error);
  }
}
