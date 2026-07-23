import { Link } from "react-router";
import "../css/NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <span className="notfound-code">404</span>
      <h2 className="notfound-title">Sahifa topilmadi</h2>
      <p className="notfound-text">
        Siz izlayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
      </p>
      <Link to="/" className="notfound-link">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default NotFound;