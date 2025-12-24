export default function ArticleCard({ article }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 16,
      marginBottom: 16,
      borderRadius: 8
    }}>
      <h3>{article.title}</h3>

      <p><strong>Summary:</strong><br />{article.summary || "Processing..."}</p>

      <p>
        <strong>Sentiment:</strong>{" "}
        <span style={{
          color:
            article.sentiment === "Positive"
              ? "green"
              : article.sentiment === "Negative"
              ? "red"
              : "gray"
        }}>
          {article.sentiment || "Pending"}
        </span>
      </p>

      <small>Source: {article.source}</small>
    </div>
  );
}
