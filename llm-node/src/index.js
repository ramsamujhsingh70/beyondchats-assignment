import "dotenv/config";
import axios from "axios";
import { analyzeArticle } from "./llm.js";

const API_BASE = "http://127.0.0.1:8000/api";
import express from "express";
const app = express();

app.use(express.json());

app.post("/process", async (req, res) => {
  const { id, content } = req.body;

  const { summary, sentiment } = await analyzeArticle(content);

  await axios.post(`http://127.0.0.1:8000/api/articles/${id}`, {
    summary,
    sentiment,
  });

  res.json({ status: "processed" });
});

app.listen(3000, () => {
  console.log("LLM Node service listening on port 3000");
});

async function run() {
  const res = await axios.get(`${API_BASE}/articles`);
  const articles = res.data.articles.data ?? res.data.articles;

  if (!articles.length) {
    console.log("No articles found. Skipping processing.");
    return;
  }

  for (const article of articles) {
    console.log("Processing:", article.title);

    const { summary, sentiment } = await analyzeArticle(article.content);

    await axios.post(`${API_BASE}/articles/${article.id}`, {
      summary,
      sentiment,
    });

    console.log("Updated article:", article.id);
  }
}

run();
