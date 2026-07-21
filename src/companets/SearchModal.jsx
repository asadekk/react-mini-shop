import React from "react";
import "../css/SearchModal.css";

function SearchModal({ onClose }) {
    return (
        <div className="search-modal">
            <div className="search-header">


                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

            </div>
         </div>
    );
}

export default SearchModal;