import axios from "axios";

const API = "http://localhost:8000/api/articles";

export async function fetchLatestArticle() {
  const res = await axios.get(API);
  return res.data[0];
}

export async function publishUpdatedArticle(id, content, refs) {
  return axios.put(`${API}/${id}`, {
    content: content + "\n\nReferences:\n" + refs.join("\n"),
    is_updated: true
  });
}
