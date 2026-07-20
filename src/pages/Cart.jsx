import React from "react";
import { useCart } from "../context/CartContext";
import "../css/Cart.css";

function Cart() {
  const { cart, pilusCart, minusCart, deleteCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Savat</h2>
        <span className="cart-total">
          Total: <span className="cart-total-value">${total.toFixed(2)}</span>
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <p className="cart-empty-text">Savat bo'sh</p>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                className="cart-item-image"
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="cart-item-info">
                <h3 className="cart-item-title">{product.title}</h3>
                <p className="cart-item-price">${product.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="qty-btn qty-btn--minus"
                  onClick={() => minusCart(product.id)}
                  aria-label="Kamaytirish"
                >
                  −
                </button>
                <span className="qty-value">{product.quantity}</span>
                <button
                  className="qty-btn qty-btn--plus"
                  onClick={() => pilusCart(product.id)}
                  aria-label="Ko'paytirish"
                >
                  +
                </button>
              </div>

              <p className="cart-item-subtotal">
                ${(product.price * product.quantity).toFixed(2)}
              </p>

              <button
                className="cart-item-delete"
                onClick={() => deleteCart(product.id)}
                aria-label="O'chirish"
              >
                O'chirish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;