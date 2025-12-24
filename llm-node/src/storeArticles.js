import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/articles";

export async function storeArticles(articles) {
  for (const article of articles) {
    await axios.post(API_URL, article);
    console.log("Stored:", article.title);
  }
}
