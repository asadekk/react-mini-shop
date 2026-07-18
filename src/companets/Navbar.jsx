import { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  const [cartCount] = useState(5);
 

  return <>
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-badge">U</span>
          <span className="navbar__logo-text">shop market</span>
        </Link>

        <button className="navbar__catalog" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="7" height="7" rx="1.5" />
            <rect x="14" y="4" width="7" height="7" rx="1.5" />
            <rect x="3" y="13" width="7" height="7" rx="1.5" />
            <rect x="14" y="13" width="7" height="7" rx="1.5" />
          </svg>
          Katalog
        </button>
      </div>

      <div className="navbar__search">
        <input
          type="text"
          placeholder="Mahsulotlar va turkumlar izlash"
          className="navbar__search-input"
        />
        <button className="navbar__search-btn" type="button" aria-label="Qidirish">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <div className="navbar__right">
        <Link to="/login" className="navbar__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          <span>Kirish</span>
        </Link>

        <Link to="/favorites" className="navbar__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.5 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.8 4 4 7.5C19 15.65 12 20 12 20z" />
          </svg>
          <span>Saralangan</span>
        </Link>

        <Link to="/cart" className="navbar__link navbar__cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 9V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M6 9H18L17 20H7L6 9Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          <span>Savat</span>
          {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
    <div className="btn-categorys">
      <button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button><button className="btn_category"></button>
    </div>
  </>
}

export default Navbar;