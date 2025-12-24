import axios from "axios";
import * as cheerio from "cheerio";


export async function scrapeArticle(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $("article").text().trim();
}
