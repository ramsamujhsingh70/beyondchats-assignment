import axios from "axios";
import * as cheerio from "cheerio";

const BASE = "https://beyondchats.com";
const BLOGS = `${BASE}/blogs/`;

async function getArticleLinks(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const links = [];

  $("a[href^='/blogs/']").each((_, el) => {
    const href = $(el).attr("href");
    const title = $(el).text().trim();

    if (title.length > 10) {
      links.push({
        title,
        link: BASE + href,
      });
    }
  });

  return links;
}

(async () => {
  const collected = new Map();

  // Step 1: scrape main blogs page
  const firstBatch = await getArticleLinks(BLOGS);

  for (const a of firstBatch) {
    if (collected.size < 5) {
      collected.set(a.link, {
        title: a.title,
        content: a.link,
        source: "BeyondChats",
      });
    }
  }

  // Step 2: crawl article pages for older links
  for (const a of firstBatch) {
    if (collected.size >= 5) break;

    const more = await getArticleLinks(a.link);
    for (const m of more) {
      if (collected.size >= 5) break;
      collected.set(m.link, {
        title: m.title,
        content: m.link,
        source: "BeyondChats",
      });
    }
  }

  const articles = Array.from(collected.values()).slice(0, 5);

  console.log("Scraped articles:", articles.length);
  console.log(articles);
})();
