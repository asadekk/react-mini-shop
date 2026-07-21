// SearchModal.jsx
import ReactDOM from "react-dom";
import "../css/SearchModal.css"; // Modal stilingiz

function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <h2>Qidiruv</h2>
        {/* Modal ichidagi qidiruv kontentingiz */}
      </div>
    </div>,
    document.body // Modalni to'g'ridan-to'g'ri <body> ga ko'chiradi
  );
}

export default SearchModal;