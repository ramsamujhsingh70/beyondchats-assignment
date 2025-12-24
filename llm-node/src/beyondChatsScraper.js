import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://beyondchats.com";

async function getLastPageUrl() {
  const { data } = await axios.get(`${BASE_URL}/blogs/`);
  const $ = cheerio.load(data);

  const lastPage = $(".pagination a").last().attr("href");
  return lastPage ? BASE_URL + lastPage : `${BASE_URL}/blogs/`;
}

export async function scrapeOldestArticles() {
  const lastPageUrl = await getLastPageUrl();
  console.log("Last page:", lastPageUrl);

  const { data } = await axios.get(lastPageUrl);
  const $ = cheerio.load(data);

  const articles = [];

  $(".blog-card").slice(-5).each((_, el) => {
    const title = $(el).find("h2").text().trim();
    const link = BASE_URL + $(el).find("a").attr("href");

    articles.push({
      title,
      content: link,
      source: "BeyondChats"
    });
  });

  return articles;
}
