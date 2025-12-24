const NEWS_API_KEY = "YOUR_NEWS_API_KEY";
const newsContainer = document.getElementById("news-container");

export async function loadNews() {
  newsContainer.innerHTML = "";

  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?category=technology&pageSize=5&apiKey=${NEWS_API_KEY}`
    );
    const data = await res.json();

    data.articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <h4>${article.title}</h4>
        <p>${article.description || ""}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(card);
    });
  } catch {
    newsContainer.textContent = "Unable to load news.";
  }
}
