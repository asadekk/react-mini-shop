import React from "react";
import { useCart } from "../context/CartContext";
import '../css/Cart.css'
function Cart() {
  const { cart, pilusCart, minusCart, deleteCart } = useCart();

  return (
    <div className="cart-container">
      <h2>
        Total: $
        {cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )}
      </h2>
      {cart.length === 0 ? (
        <h2 className="empty-cart">Savat bo'sh</h2>
      ) : (
        cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <div className="cart-info">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
            <span>{product.quantity}</span>
            <div>
              <button onClick={() => pilusCart(product.id)}>+</button>
              <button onClick={() => minusCart(product.id)}>-</button>

            </div>
            <button onClick={() => deleteCart(product.id)}>DELETE</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;