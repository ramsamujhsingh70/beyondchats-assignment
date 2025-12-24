import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

export const fetchArticles = async (page = 1) => {
  const res = await axios.get(`${API_URL}/articles?page=${page}`);
  return res.data.articles; // paginator object
};
