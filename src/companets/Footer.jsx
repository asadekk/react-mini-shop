import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>MiniShop</h2>
          <p>Quality products at affordable prices.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@minishop.com</p>
          <p>Phone: +998 90 123 45 67</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MiniShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;