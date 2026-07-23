import "../css/Laoding.css";

function Loading({ text = "Yuklanmoqda..." }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p className="loading-text">{text}</p>
    </div>
  );
}

export default Loading;