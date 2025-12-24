import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles(page).then(res => {
      setArticles(res.data);
      setLastPage(res.last_page);
      setLoading(false);
    });
  }, [page]);

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "auto" }}>
      <h1>BeyondChats Articles</h1>

      {loading && <p>Loading articles...</p>}

      {!loading && articles.length === 0 && (
        <p>No articles found.</p>
      )}

      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}

      <div style={{ marginTop: 20 }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "0 12px" }}>
          Page {page} of {lastPage}
        </span>

        <button
          disabled={page === lastPage}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
